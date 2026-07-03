import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';
import { LINKEDIN_FEED_CONFIG } from './linkedinFeedPageConfig';

export default class LinkedinFeedPage extends LightningElement {
    @api config;
    @api currentUser;
    @api posts;
    @api newsItems;

    chevronDownUrl = `${LINKEDIN_ASSETS}/icons/chevron_down.svg`;
    linkedinLogoUrl = `${LINKEDIN_ASSETS}/images/linkedin_logo.svg`;

    get resolvedConfig() {
        return this.config || LINKEDIN_FEED_CONFIG;
    }

    get resolvedUser() {
        return this.currentUser?.name
            ? this.currentUser
            : this.resolvedConfig.currentUser;
    }

    get resolvedPosts() {
        return this.posts?.length
            ? this.posts
            : this.resolvedConfig.posts;
    }

    get resolvedNewsItems() {
        return this.newsItems?.length
            ? this.newsItems
            : this.resolvedConfig.news.items;
    }

    get navConfig() {
        return this.resolvedConfig.nav;
    }

    get profileCardConfig() {
        return this.resolvedConfig.profileCard;
    }

    get composerConfig() {
        return this.resolvedConfig.composer;
    }

    get newsConfig() {
        return this.resolvedConfig.news;
    }

    get chatConfig() {
        return this.resolvedConfig.chat;
    }

    get resolvedShowStats() {
        return this.profileCardConfig.showStats;
    }

    get resolvedShowLinks() {
        return this.profileCardConfig.showLinks;
    }

    get sortLabel() {
        return this.resolvedConfig.feed.sortLabel;
    }

    get composerPlaceholder() {
        return this.composerConfig.placeholder;
    }

    get newsSectionTitle() {
        return this.newsConfig.title;
    }

    get newsShowMoreLabel() {
        return this.newsConfig.showMoreLabel;
    }

    handleStartPost() { this.dispatchEvent(new CustomEvent('startpost')); }
    handleAddVideo() { this.dispatchEvent(new CustomEvent('addvideo')); }
    handleAddPhoto() { this.dispatchEvent(new CustomEvent('addphoto')); }
    handleWriteArticle() { this.dispatchEvent(new CustomEvent('writearticle')); }
    handleSort() { this.dispatchEvent(new CustomEvent('sort')); }
    handleLike(event) { this.dispatchEvent(new CustomEvent('like', { detail: event.detail })); }
    handleComment() { this.dispatchEvent(new CustomEvent('comment')); }
    handleRepost() { this.dispatchEvent(new CustomEvent('repost')); }
    handleSend() { this.dispatchEvent(new CustomEvent('send')); }
    handleNewsClick(event) { this.dispatchEvent(new CustomEvent('newsclick', { detail: event.detail })); }
    handleShowMoreNews() { this.dispatchEvent(new CustomEvent('showmorenews')); }
}