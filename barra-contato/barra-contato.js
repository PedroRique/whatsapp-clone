class MyBarra extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="barra-contato/barra-contato.css">
        <div class="bc">
            <div class="pesquisar">
                <img src="barra-contato/lupa.png">
                <img src="barra-contato/video-camera.png">
                <img src="barra-contato/tres.png">
            </div>
        </div>
        `;
  }
}

customElements.define("my-barra", MyBarra);
