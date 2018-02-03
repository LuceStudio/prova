import buildShadowRoot from './buildShadowRoot.js'

class ElementActions extends HTMLElement {
    constructor() {
        super();
        const html = `
          <style>
              :host {
                  display: block;
                  height: 100vh;
                  box-sizing: border-box;
              }
              .container {
                  box-sizing: border-box;
                  height: 100%;
                  width: 100%;
                  border-right: 1px solid var(--es-color-400);
                  overflow: auto;
                  background: var(--es-color-300);
                  padding: 0.5em;
              }
              ::slotted(:first-child){
                  /*border-bottom: 2px solid var(--es-color-400);*/
                  height: 64%;
              }
              ::slotted(:nth-child(2)){
                  overflow: auto;
                  height: 36%;
              }
          </style>
          <div class="container">
              <slot></slot>
          </div>`;

        buildShadowRoot(html, this);
    }

}
customElements.define('element-actions', ElementActions);
export default ElementActions;
