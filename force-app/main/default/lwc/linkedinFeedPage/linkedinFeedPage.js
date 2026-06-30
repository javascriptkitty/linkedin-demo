import { LightningElement, api, track } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

const SAMPLE_USER = {
    name: 'Maya Reyes',
    jobTitle: 'Director of Workforce Strategy at Vantage Clinical Solutions',
    location: 'Chicago, IL',
    avatarPhoto: '',
    coverPhoto: '',
    profileViewers: 32
};

export default class LinkedinFeedPage extends LightningElement {
    @api currentUser;
    @api posts;
    @api newsItems;

    @api composerPlaceholder = 'Start a post';
    @api newsSectionTitle = 'LinkedIn News';
    @api newsShowMoreLabel = 'Show more news';
    @api showStats = false;
    @api showLinks = false;

    @track _sortLabel = 'Top';

    chevronDownUrl = `${LINKEDIN_ASSETS}/icons/chevron_down.svg`;
    liLogoUrl      = `${LINKEDIN_ASSETS}/images/li_logo.png`;

    get resolvedShowStats() {
        return this.showStats || true;
    }

    get resolvedShowLinks() {
        return this.showLinks || true;
    }

    get resolvedUser() {
        return this.currentUser && this.currentUser.name ? this.currentUser : {
            ...SAMPLE_USER,
            avatarPhoto: `${LINKEDIN_ASSETS}/images/avatar_user.png`
        };
    }

    get resolvedPosts() {
        if (this.posts && this.posts.length) return this.posts;
        return [
            {
                id: '1',
                authorName: 'Sarah Chen',
                authorTitle: 'Senior CRA at Freelance Clinical Consultant',
                authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_sarah.png`,
                timeAgo: '3h',
                content: 'Something nobody talks about enough in clinical ops:\nThe coordinators are the ones holding your study together.\nNot the PIs. Not the sponsors.',
                reactions: 62,
                commentsCount: 12,
                repostsCount: 0,
                visibility: 'public'
            },
            {
                id: '2',
                authorName: 'Adecco',
                authorTitle: '10,058,979 followers\nPromoted',
                authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_adecco.png`,
                timeAgo: '',
                content: 'Adecco specializes in rapidly placing qualified Clinical Trial Coordinators, CRAs, and site support staff — so you can scale your workforce in weeks, not months.\n\n✅ Pre-vetted clinical talent\n✅ Flexible contract & direct hire options\n✅ Deep expertise in biotech, pharma & CRO environments',
                contentHashtags: '#AdeccoGroup #BusinessLeaders #FutureOfWork The Adecco Group',
                reactions: 18,
                commentsCount: 0,
                repostsCount: 3,
                visibility: 'public',
                mediaImageUrl: `${LINKEDIN_ASSETS}/images/adecco_ad_photo.png`,
                mediaTitle: 'Join thousands of companies. Build your best team.',
                mediaDomain: 'adecco.com',
                mediaCtaLabel: 'Learn more',
                mediaCtaUrl: 'https://www.adecco.com/',
                mediaFooterBg: '#ecf3fa'
            },
            {
                id: '3',
                authorName: 'Marcus Lee',
                authorTitle: 'Engineering Lead at ScaleAI',
                authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_marcus.png`,
                timeAgo: '1d',
                content: "This is the best summary I've seen on the current state of AI dev tools.",
                reactions: 62,
                commentsCount: 12,
                repostsCount: 0,
                visibility: 'public'
            }
        ];
    }

    get resolvedNewsItems() {
        if (this.newsItems && this.newsItems.length) return this.newsItems;
        return [
            { id: '1', headline: 'Remote work levels stabilize', timeAgo: 'Top news', readersCount: 12402 },
            { id: '2', headline: 'AI roles on the rise in 2024', timeAgo: '2d ago', readersCount: 8941 },
            { id: '3', headline: "Big tech's hiring shift", timeAgo: '4h ago', readersCount: 4128 },
            { id: '4', headline: 'Sustainability in manufacturing', timeAgo: '1d ago', readersCount: 2340 }
        ];
    }

    handleStartPost() {
        this.dispatchEvent(new CustomEvent('startpost'));
    }

    handleAddVideo() {
        this.dispatchEvent(new CustomEvent('addvideo'));
    }

    handleAddPhoto() {
        this.dispatchEvent(new CustomEvent('addphoto'));
    }

    handleWriteArticle() {
        this.dispatchEvent(new CustomEvent('writearticle'));
    }

    handleSort() {
        this.dispatchEvent(new CustomEvent('sort'));
    }

    handleLike(event) {
        this.dispatchEvent(new CustomEvent('like', { detail: event.detail }));
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

    handleNewsClick(event) {
        this.dispatchEvent(new CustomEvent('newsclick', { detail: event.detail }));
    }

    handleShowMoreNews() {
        this.dispatchEvent(new CustomEvent('showmorenews'));
    }
}
