class Pesquisar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="pesquisar/pesquisar.css">
            <div class="container">
                <img src="pesquisar/icone2.png" alt="icone2">
                <img src="pesquisar/status.webp" alt="status">
                <img src="pesquisar/conversa.png" alt="conversa">
                <img src="pesquisar/ponto.png" alt="ponto">
                
                <br>
            
                <div class="status-info">
                    <input type="text" placeholder="pesquisar">
                </div>
                
                <div class="ponto"></div>
                <div class="ponto"></div>
                <div class="ponto"></div>
            </div>
        `;
    }


}

customElements.define('my-pesquisar', Pesquisar);