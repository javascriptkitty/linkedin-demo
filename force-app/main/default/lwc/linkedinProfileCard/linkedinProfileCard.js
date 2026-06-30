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

    defaultCoverUrl    = `${LINKEDIN_ASSETS}/images/profile_banner.png`;
    bookmarkIconUrl    = `${LINKEDIN_ASSETS}/icons/bookmark.svg`;
    groupsPart1Url     = `${LINKEDIN_ASSETS}/icons/groups_icon.svg`;
    groupsPart2Url     = `${LINKEDIN_ASSETS}/icons/groups_part2.svg`;
    groupsPart3Url     = `${LINKEDIN_ASSETS}/icons/groups_part3.svg`;
    newslettersIconUrl = `${LINKEDIN_ASSETS}/icons/newsletters.svg`;
    eventsIconUrl      = `${LINKEDIN_ASSETS}/icons/events.svg`;

    get initials() {
        if (!this.name) return '?';
        return this.name
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0].toUpperCase())
            .join('');
    }

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
