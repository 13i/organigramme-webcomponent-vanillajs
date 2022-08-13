
import sceneTpl from './tpl/scene.js';

const template = document.createElement('template');
template.innerHTML = sceneTpl;

class HpbOrganigramme extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    //this.shadowRoot.getElementById('svg-orga'); 
  }
}

customElements.define('hpb-organigramme', HpbOrganigramme);
