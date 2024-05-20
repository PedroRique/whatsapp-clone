class CaixaTexto extends HTMLElement { 
    constructor () {
        super ()
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() { 
        this.shadow.innerHTML = `
        <link rel="caixa-texto" href="style.css">
        <footer class="rodape">
            <div>
                <button input="text" id="mensagem">
                <input type="password">
                </button>
            </div> 

        </footer> `

    }
}

customElements.define('caixa-texto', CaixaTexto);