import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinTopNav extends LightningElement {
    @api userName = '';
    @api userPhoto = '';
    @api searchPlaceholder = "Search";

    liLogoBugUrl     = `${LINKEDIN_ASSETS}/icons/li_logo_bug.png`;
    searchIconUrl    = `${LINKEDIN_ASSETS}/icons/search.svg`;
    homeIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_home.svg`;
    networkIconUrl   = `${LINKEDIN_ASSETS}/icons/nav_network.svg`;
    briefcaseIconUrl = `${LINKEDIN_ASSETS}/icons/nav_briefcase.svg`;
    messagingIconUrl = `${LINKEDIN_ASSETS}/icons/nav_messaging.svg`;
    bellIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_bell.svg`;
    dropdownIconUrl  = `${LINKEDIN_ASSETS}/icons/nav_dropdown.svg`;
    gridIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_grid.svg`;
    premiumIconUrl   = `${LINKEDIN_ASSETS}/icons/nav_premium.svg`;

    get userInitials() {
        if (!this.userName) return '?';
        return this.userName
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0].toUpperCase())
            .join('');
    }

    handleHome()          { this.dispatchEvent(new CustomEvent('home')); }
    handleNetwork()       { this.dispatchEvent(new CustomEvent('network')); }
    handleJobs()          { this.dispatchEvent(new CustomEvent('jobs')); }
    handleMessaging()     { this.dispatchEvent(new CustomEvent('messaging')); }
    handleNotifications() { this.dispatchEvent(new CustomEvent('notifications')); }
    handleMe()            { this.dispatchEvent(new CustomEvent('me')); }
    handleBusiness()      { this.dispatchEvent(new CustomEvent('business')); }
    handlePremium()       { this.dispatchEvent(new CustomEvent('premium')); }
}
