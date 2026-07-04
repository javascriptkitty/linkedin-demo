import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinProfileCard extends LightningElement {
    /** Core identity — minimum 3 props */
    @api name = '';
    @api jobTitle = '';
    @api location = '';

    /** Optional extras */
    @api avatarPhoto = '';
    @api coverPhoto = '';
    @api profileViewers = 0;
    @api showStats = false;
    @api showLinks = false;
    @api isVerified = false;
    
    defaultCoverUrl    = `${LINKEDIN_ASSETS}/icons/li_banner_default.svg`;
    defaultAvatarUrl   = `${LINKEDIN_ASSETS}/icons/li_avatar_default.svg`;
    bookmarkIconUrl    = `${LINKEDIN_ASSETS}/icons/bookmark.svg`;
    groupsIconUrl     = `${LINKEDIN_ASSETS}/icons/groups_icon.svg`;
    newslettersIconUrl = `${LINKEDIN_ASSETS}/icons/newsletters.svg`;
    eventsIconUrl      = `${LINKEDIN_ASSETS}/icons/events.svg`;
    verifiedIconUrl    = `${LINKEDIN_ASSETS}/icons/li_verified.svg`;

    handleViewers() {
        this.dispatchEvent(new CustomEvent('viewviewers'));
    }

    handleAnalytics() {
        this.dispatchEvent(new CustomEvent('viewanalytics'));
    }

    handleSavedItems() {
        this.dispatchEvent(new CustomEvent('saveditems'));
    }

    handleGroups() {
        this.dispatchEvent(new CustomEvent('groups'));
    }

    handleNewsletters() {
        this.dispatchEvent(new CustomEvent('newsletters'));
    }

    handleEvents() {
        this.dispatchEvent(new CustomEvent('events'));
    }
}
