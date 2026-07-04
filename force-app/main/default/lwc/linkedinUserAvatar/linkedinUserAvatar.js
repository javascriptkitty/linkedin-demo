import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';


export default class LinkedinUserAvatar extends LightningElement {
    @api name = '';
    @api photo = '';
    @api size = '48';

    defaultAvatarUrl = `${LINKEDIN_ASSETS}/icons/li_avatar_default.svg`;

    get avatarStyle() {
        return `width: ${this.size}px; height: ${this.size}px;`;
    }
}
