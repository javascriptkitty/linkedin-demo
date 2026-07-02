import { LightningElement, api } from 'lwc';

export default class Icon extends LightningElement {
    @api name;

    get isCaret() {
        return this.name === 'caret';
    }

    get isHome() {
        return this.name === 'home';
    }

    get isNetwork() {
        return this.name === 'network';
    }

    get isBriefcase() {
        return this.name === 'briefcase';
    }

    get isMessaging() {
        return this.name === 'messaging';
    }

    get isBell() {
        return this.name === 'bell';
    }

    get isGrid() {
        return this.name === 'grid';
    }

    get isSearch() {
        return this.name === 'search';
    }
}

