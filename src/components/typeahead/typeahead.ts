import template from './typeahead.html';
import style from './typeahead.scss';

export class Typeahead extends HTMLElement {
    private root: ShadowRoot;

    public constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.bootstrap();
    };

    private bootstrap = (): void => {
        this.attachMarkup();
        this.attachListeners();
    };

    private attachMarkup = (): void => {
        this.root.innerHTML = template + `<style>${style}</style>`;
    }

    private attachListeners = (): void => {
        this.addEventListener('click', this.handleClick);
    }

    private handleClick = (): void => {
        console.log(this);
    }
}

window.customElements.define('wc-typeahead', Typeahead);
