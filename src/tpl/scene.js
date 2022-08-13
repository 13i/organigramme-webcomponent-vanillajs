import c from '../config.js';
import holdingTpl from './holding.js';
import tgl from './toggler.js';

export default  `
  <style>
  :host {
    --color-grey: #38373f;
    --color-white: #ffffff;
  }
  #svg-orga {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: 1px solid #ccc;
  }
  .holding .bg {
    fill: var(--color-white);
    stroke:  var(--color-grey);
    stroke-width: 5;
  }
  </style>
  <svg id="svg-orga" viewBox="0 0 ${c.scene.w} ${c.scene.h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <style type="text/css">
      .toggler {
        cursor: pointer;
      }
      .toggler:hover {
      }
      #tpl-toggler {
        cursor: pointer;
      }
      .toggler {
        cursor: pointer;
        transition: transform 0.25s linear; 
        transform-origin: 50% 50%; 
        transform: rotate(0deg); 
      }
      .toggler:hover {
        transform: rotate(45deg);
      }
      </style>
      <g id="tpl-toggler" class="toggler">
        <path d="M12.1,23.7C5.7,23.7,.5,18.5,.5,12.1S5.7,.5,12.1,.5s11.6,5.2,11.6,11.6-5.2,11.6-11.6,11.6Z" fill="#38373f" stroke="#fff" stroke-width="3"/>
        <path d="M13.05,6.64v4.22h4.05v1.82h-4.05v4.26h-1.9v-4.26H7.11v-1.82h4.05V6.64h1.9Z" fill="#fff"/>
      </g>
    </defs>
    ${holdingTpl}
    <use href="#tpl-toggler" x="100" y="100" width="24.2" height="24.2" />
  </svg>
`;