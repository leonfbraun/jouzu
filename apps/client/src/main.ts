import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('main-view')
export class MainView extends LitElement {
  render() {
    return html` <p>Willkommen im Frontend!</p> `;
  }
}

const mainView = new MainView();
document.body.appendChild(mainView);
