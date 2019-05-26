import template from './heading.html';
import style from './heading.css';

export class Typeahead extends HTMLElement {
    private root: ShadowRoot;
    private text: string = '';

    public constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.bootstrap();
    };

    private bootstrap = (): void => {
        this.getAttributes();
        this.attachMarkup();
        this.attachListeners();
    };

    private getAttributes = (): void => {
        this.text = this.getAttribute('text') && this.getAttribute('text');
    };

    private attachMarkup = (): void => {
        const html = template.replace('{{ text }}', this.text);
        const css = `<style>${style}</style>`;

        this.root.innerHTML = html + css;
    };

    private attachListeners = (): void => {
        this.addEventListener('click', this.handleClick);
    };

    private handleClick = (): void => {
        console.log(this);
    };
};

window.customElements.define('wc-heading', Typeahead);
