import { LightningElement, api, track } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

const MAX_LENGTH = 200;

const REACTION_TYPES = ['like', 'celebrate', 'support', 'love', 'insightful', 'funny'];

export default class SocialPost extends LightningElement {
    @api variant = 'standard'; // standard | promoted
    @api contextType = ''; // recommended | commented | reposted | liked | ''
    @api contextText = '';
    @api showFollow = false;
    @api showDismiss = false;

    @api authorName = '';
    @api authorTitle = '';
    @api authorPhoto = '';
    @api authorVerified = false;
    @api authorBadge = '';

    @api timeAgo = '';
    @api content = '';
    @api reactions = 0;
    @api commentsCount = 0;
    @api repostsCount = 0;
    @api visibility = 'public';

    @api reactionTypes = 'like,celebrate,love';
    @api initialReaction = '';

    @api mediaImageUrl = '';
    @api mediaTitle = '';
    @api mediaDomain = '';
    @api mediaCtaLabel = '';
    @api mediaCtaUrl = '';
    @api mediaFooterBg = '#ecf3fa';
    @api mediaType = 'image'; // image | linkCard
    @api contentHashtags = '';
    @api mediaGradientUrl = '';
    @api mediaOverlayTitle = '';
    @api mediaOverlayTitleDark = '';
    @api mediaOverlayLogoUrl = '';

    @api commentAuthorName = '';
    @api commentAuthorTitle = '';
    @api commentAuthorPhoto = '';
    @api commentText = '';
    @api commentTimeAgo = '';

    @track isExpanded = false;
    @track selectedReaction = '';
    @track isDismissed = false;

    publicIconUrl = `${LINKEDIN_ASSETS}/icons/public.svg`;
    moreHorizontalUrl = `${LINKEDIN_ASSETS}/icons/more_horizontal.svg`;
    closeIconUrl = `${LINKEDIN_ASSETS}/icons/close.svg`;
    verifiedIconUrl = `${LINKEDIN_ASSETS}/icons/li_verified.svg`;

    reactionLikeUrl = `${LINKEDIN_ASSETS}/icons/reaction_like.svg`;
    reactionCelebrateUrl = `${LINKEDIN_ASSETS}/icons/reaction_celebrate.svg`;
    reactionSupportUrl = `${LINKEDIN_ASSETS}/icons/reaction_support.svg`;
    reactionLoveUrl = `${LINKEDIN_ASSETS}/icons/reaction_love.svg`;
    reactionInsightfulUrl = `${LINKEDIN_ASSETS}/icons/reaction_insightful.svg`;
    reactionFunnyUrl = `${LINKEDIN_ASSETS}/icons/reaction_funny.svg`;

    connectedCallback() {
        this.selectedReaction = this.initialReaction || '';
    }

    get reactionIconMap() {
        return {
            like: this.reactionLikeUrl,
            celebrate: this.reactionCelebrateUrl,
            support: this.reactionSupportUrl,
            love: this.reactionLoveUrl,
            insightful: this.reactionInsightfulUrl,
            funny: this.reactionFunnyUrl
        };
    }

    get reactionLabelMap() {
        return {
            like: 'Like',
            celebrate: 'Celebrate',
            support: 'Support',
            love: 'Love',
            insightful: 'Insightful',
            funny: 'Funny'
        };
    }

    get visibleReactionIcons() {
        return (this.reactionTypes || 'like')
            .split(',')
            .map((type) => type.trim())
            .filter(Boolean)
            .map((type, index) => ({
                type,
                icon: this.reactionIconMap[type] || this.reactionLikeUrl,
                label: this.reactionLabelMap[type] || 'Reaction',
                className: index === 0
                    ? 'post-reaction-img'
                    : 'post-reaction-img post-reaction-img--overlap'
            }));
    }

    get reactionOptions() {
        return REACTION_TYPES.map((type) => ({
            type,
            icon: this.reactionIconMap[type],
            label: this.reactionLabelMap[type]
        }));
    }

    get hasSelectedReaction() {
        return !!this.selectedReaction;
    }

    get selectedReactionIcon() {
        return this.reactionIconMap[this.selectedReaction];
    }

    get selectedReactionLabel() {
        return this.reactionLabelMap[this.selectedReaction] || 'Like';
    }

    get isPromoted() {
        return this.variant === 'promoted' || this.authorTitle?.toLowerCase().includes('promoted');
    }

    get hasContext() {
        return !!this.contextText;
    }

    get hasBody() {
        return !!this.content || !!this.contentHashtags;
    }

    get isTruncated() {
        return !this.isExpanded && this.content && this.content.length > MAX_LENGTH;
    }

    get displayedContent() {
        if (this.isExpanded || !this.content) return this.content;
        if (this.content.length <= MAX_LENGTH) return this.content;
        return this.content.slice(0, MAX_LENGTH);
    }

    get toggleLabel() {
        return this.isExpanded ? 'see less' : 'more';
    }

    get overlayLightLines() {
        if (!this.mediaOverlayTitle) return [];
        return this.mediaOverlayTitle.split('\n').map((text, index) => ({ id: String(index), text }));
    }

    get overlayDarkLines() {
        if (!this.mediaOverlayTitleDark) return [];
        return this.mediaOverlayTitleDark.split('\n').map((text, index) => ({ id: String(index), text }));
    }

    get hasOverlayText() {
        return !!this.mediaOverlayTitle || !!this.mediaOverlayTitleDark;
    }

    get hasMedia() {
        return !!this.mediaImageUrl;
    }

    get isLinkCard() {
        return this.mediaType === 'linkCard' || !!this.mediaTitle || !!this.mediaCtaLabel;
    }

    get mediaCardClass() {
        return this.isLinkCard
            ? 'post-media-card post-media-card--link'
            : 'post-media-card post-media-card--image';
    }

    get mediaFooterStyle() {
        return `background-color: ${this.mediaFooterBg};`;
    }

    get hasStats() {
        return this.reactions || this.commentsCount || this.repostsCount;
    }

    get hasCommentPreview() {
        return !!this.commentText;
    }

    get likeButtonClass() {
        return this.selectedReaction
            ? 'post-action-btn post-action-btn--liked post-action-btn--reaction'
            : 'post-action-btn post-action-btn--reaction';
    }

    handleToggleContent() {
        this.isExpanded = !this.isExpanded;
    }

    handleLike() {
        this.selectedReaction = this.selectedReaction ? '' : 'like';
        this.dispatchEvent(new CustomEvent('reactionchange', {
            detail: { reaction: this.selectedReaction || null }
        }));
    }

    handleSelectReaction(event) {
        event.stopPropagation();
        const reaction = event.currentTarget.dataset.reaction;

        this.selectedReaction = reaction;
        this.dispatchEvent(new CustomEvent('reactionchange', {
            detail: { reaction }
        }));
    }

    handleComment() {
        this.dispatchEvent(new CustomEvent('comment'));
    }

    handleRepost() {
        this.dispatchEvent(new CustomEvent('repost'));
    }

    handleSend() {
        this.dispatchEvent(new CustomEvent('send'));
    }

    handleMoreOptions() {
        this.dispatchEvent(new CustomEvent('moreoptions'));
    }

    handleDismiss() {
        this.isDismissed = true;
        this.dispatchEvent(new CustomEvent('dismiss', {
            detail: {
                contextType: this.contextType,
                authorName: this.authorName
            }
        }));
    }

    handleOpenComments() {
        this.dispatchEvent(new CustomEvent('opencomments'));
    }

    handleOpenReposts() {
        this.dispatchEvent(new CustomEvent('openreposts'));
    }

    handleMediaCta() {
        this.dispatchEvent(new CustomEvent('mediacta'));
    }

    handleFollow() {
        this.dispatchEvent(new CustomEvent('follow', {
            detail: {
                contextType: this.contextType,
                authorName: this.authorName
            }
        }));
    }
}
