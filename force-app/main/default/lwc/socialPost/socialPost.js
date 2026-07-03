import { LightningElement, api, track } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

const MAX_LENGTH = 200;

export default class SocialPost extends LightningElement {
    @api authorName = '';
    @api authorTitle = '';
    @api authorPhoto = '';
    @api timeAgo = '';
    @api content = '';
    @api reactions = 0;
    @api commentsCount = 0;
    @api repostsCount = 0;
    @api visibility = 'public';
    /** Optional embedded media card */
    @api mediaImageUrl      = '';
    @api mediaTitle         = '';
    @api mediaDomain        = '';
    @api mediaCtaLabel      = '';
    @api mediaCtaUrl        = '';
    @api mediaFooterBg      = '#ecf3fa';
    @api contentHashtags       = '';
    @api mediaGradientUrl      = '';
    @api mediaOverlayTitle     = '';
    @api mediaOverlayTitleDark = '';
    @api mediaOverlayLogoUrl   = '';

    @track isExpanded = false;
    @track isLiked = false;

    publicIconUrl = `${LINKEDIN_ASSETS}/icons/public.svg`;
    moreHorizontalUrl = `${LINKEDIN_ASSETS}/icons/more_horizontal.svg`;
    closeIconUrl = `${LINKEDIN_ASSETS}/icons/close.svg`;
    reactionLikeUrl = `${LINKEDIN_ASSETS}/icons/reaction_like.svg`;
    reactionHeartUrl = `${LINKEDIN_ASSETS}/icons/reaction_heart.svg`;
    reactionPraiseUrl = `${LINKEDIN_ASSETS}/icons/reaction_praise.svg`;
    reactionEntertainmentUrl = `${LINKEDIN_ASSETS}/icons/reaction_entertainment.svg`;
    reactionInterestUrl = `${LINKEDIN_ASSETS}/icons/reaction_interest.svg`;
    reactionSupportUrl = `${LINKEDIN_ASSETS}/icons/reaction_support.svg`;

    get isTruncated() {
        return !this.isExpanded && this.content && this.content.length > MAX_LENGTH;
    }

    get displayedContent() {
        if (this.isExpanded || !this.content) return this.content;
        if (this.content.length <= MAX_LENGTH) return this.content;
        return this.content.slice(0, MAX_LENGTH);
    }

    get toggleLabel() {
        return this.isExpanded ? 'see less' : 'see more';
    }

    get overlayLightLines() {
        if (!this.mediaOverlayTitle) return [];
        return this.mediaOverlayTitle.split('\n').map((t, i) => ({ id: String(i), text: t }));
    }

    get overlayDarkLines() {
        if (!this.mediaOverlayTitleDark) return [];
        return this.mediaOverlayTitleDark.split('\n').map((t, i) => ({ id: String(i), text: t }));
    }

    get hasOverlayText() {
        return !!this.mediaOverlayTitle || !!this.mediaOverlayTitleDark;
    }

    get mediaFooterStyle() {
        return `background-color: ${this.mediaFooterBg};`;
    }

    get hasStats() {
        return this.reactions || this.commentsCount || this.repostsCount;
    }

    get likeButtonClass() {
        return this.isLiked
            ? 'post-action-btn post-action-btn--liked'
            : 'post-action-btn';
    }

    handleToggleContent() {
        this.isExpanded = !this.isExpanded;
    }

    handleLike() {
        this.isLiked = !this.isLiked;
        this.dispatchEvent(new CustomEvent('like', { detail: { liked: this.isLiked } }));
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

    handleOpenComments() {
        this.dispatchEvent(new CustomEvent('opencomments'));
    }

    handleOpenReposts() {
        this.dispatchEvent(new CustomEvent('openreposts'));
    }

    handleMediaCta() {
        this.dispatchEvent(new CustomEvent('mediacta'));
    }
}
