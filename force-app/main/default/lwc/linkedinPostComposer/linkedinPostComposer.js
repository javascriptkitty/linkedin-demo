import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinPostComposer extends LightningElement {
    @api userPhoto = '';
    @api userName = '';
    @api placeholder = 'Start a post';

    videoIconUrl = `${LINKEDIN_ASSETS}/icons/video.svg`;
    photoIconUrl = `${LINKEDIN_ASSETS}/icons/photo.svg`;

    get userInitials() {
        if (!this.userName) return '?';
        return this.userName
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0].toUpperCase())
            .join('');
    }

    handleStartPost() {
        this.dispatchEvent(new CustomEvent('startpost'));
    }

    handleVideo() {
        this.dispatchEvent(new CustomEvent('addvideo'));
    }

    handlePhoto() {
        this.dispatchEvent(new CustomEvent('addphoto'));
    }

    handleArticle() {
        this.dispatchEvent(new CustomEvent('writearticle'));
    }
}
