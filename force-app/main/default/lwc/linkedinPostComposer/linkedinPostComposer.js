import { LightningElement, api } from 'lwc';
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export default class LinkedinPostComposer extends LightningElement {
    @api userPhoto = '';
    @api userName = '';
    @api placeholder = 'Start a post';

    videoIconUrl = `${LINKEDIN_ASSETS}/icons/video.svg`;
    photoIconUrl = `${LINKEDIN_ASSETS}/icons/photo.svg`;
    articleIconUrl = `${LINKEDIN_ASSETS}/icons/article.svg`;


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
