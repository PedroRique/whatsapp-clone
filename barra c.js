class Mybarra extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <html>
        <head>
        <link rel="stylesheet" href="barra contato.css">
        </head>
        <body>
            <div class="bc">
            <div class="pesquisar">
        <img src="lupa.png">
        <img src="video-camera.png">
        <img src="tres.png">
            </div>
            </div>
        </body>
        </html>
        `;
    }


}

customElements.define('my-barra', Mybarra);