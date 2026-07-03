import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinTopNav extends LightningElement {
    @api userName = '';
    @api userPhoto = '';
    @api navConfig = {};


    liLogoUrl     = `${LINKEDIN_ASSETS}/icons/li_logo.svg`;
    searchIconUrl    = `${LINKEDIN_ASSETS}/icons/search.svg`;
    homeIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_home.svg`;
    networkIconUrl   = `${LINKEDIN_ASSETS}/icons/nav_network.svg`;
    briefcaseIconUrl = `${LINKEDIN_ASSETS}/icons/nav_briefcase.svg`;
    messagingIconUrl = `${LINKEDIN_ASSETS}/icons/nav_messaging.svg`;
    bellIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_bell.svg`;
    dropdownIconUrl  = `${LINKEDIN_ASSETS}/icons/nav_dropdown.svg`;
    gridIconUrl      = `${LINKEDIN_ASSETS}/icons/nav_grid.svg`;
    premiumIconUrl   = `${LINKEDIN_ASSETS}/icons/nav_premium.svg`;

    get notifications() {
        return this.navConfig?.notifications || {};
    }

    get searchPlaceholder() {
        return this.navConfig?.searchPlaceholder || 'Search';
    }

    get hasHomeBadge() {
        return this.notifications.home ?? 0;
    }
    
    get networkBadgeCount() {
        return this.notifications.network ?? 0;
    }
    
    get jobsBadgeCount() {
        return this.notifications.jobs ?? 0;
    }
    
    get messagingBadgeCount() {
        return this.notifications.messaging ?? 0;
    }
    
    get notificationsBadgeCount() {
        return this.notifications.notifications ?? 0;
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
