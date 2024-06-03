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
          <div class="bc2">
              <my-avatar></my-avatar>
              <h1 class="nome">domingo a noite</h1>
          </div>
          
              
          <div class="pesquisar">
              <img class="video" src="barra-contato/video-camera.png">
              <img class="lupa" src="barra-contato/lupa.png">
              <img class="ponto" src="barra-contato/tres.png">
          </div>
      </div>
        `;
  }
}

customElements.define("my-barra", MyBarra);
