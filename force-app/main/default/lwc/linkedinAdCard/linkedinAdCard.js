import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinAdCard extends LightningElement {
    @api userPhoto = '';
    @api userName = '';
    @api bodyText = '';
    @api ctaTitle = 'Unlock more opportunities with Premium';
    @api ctaLabel = 'Try for free';

    moreHorizontalUrl = `${LINKEDIN_ASSETS}/icons/more_horizontal.svg`;
    premiumLogoUrl    = `${LINKEDIN_ASSETS}/images/li_premium_logo.png`;

    get resolvedBodyText() {
        if (this.bodyText) {
            return this.bodyText;
        }
        const firstName = this.userName?.trim()?.split(/\s+/)[0] || 'You';
        return `${firstName}, see who's viewed your profile in the last 90 days`;
    }

    handleMore() {
        this.dispatchEvent(new CustomEvent('moreoptions'));
    }

    handleCta() {
        this.dispatchEvent(new CustomEvent('ctaclick'));
    }
}
