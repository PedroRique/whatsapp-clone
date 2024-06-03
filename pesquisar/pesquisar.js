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
            <div class="contaniner">
                <img src="pesquisar/lupa.png" alt="lupa">
                <img src="pesquisar/icone2.png" alt="icone2">
                <img src="pesquisar/status.webp" alt="status">
                <img src="pesquisar/conversa.png" alt="conversa">
                <img src="pesquisar/ponto.png" alt="ponto">
                
                <div class="container">
                    <input type="pesquisar" class="pesquisar" placeholder="pesquisar">
                </div>
                    <br>
                
                <div class="ponto"></div>
                <div class="ponto"></div>
                <div class="ponto"></div>
            </div>
        `;
    }


}

customElements.define('my-pesquisar', Pesquisar);