import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinNewsSection extends LightningElement {
    @api title = 'LinkedIn News';
    @api showMoreLabel = 'Show more news';
    @api newsItems = [];

    infoIconUrl = `${LINKEDIN_ASSETS}/icons/info_icon.svg`;
    chevronDownUrl = `${LINKEDIN_ASSETS}/icons/chevron_down.svg`;

    handleInfo() {
        this.dispatchEvent(new CustomEvent('info'));
    }

    handleItemClick(event) {
        const id = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('newsclick', { detail: { id } }));
    }

    handleShowMore() {
        this.dispatchEvent(new CustomEvent('showmore'));
    }
}
