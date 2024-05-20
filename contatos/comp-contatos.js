class MyContacts extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="contatos.css">
        <aside>
            <h2>Chats</h2>
        </aside>
    
    <div class="chat-container">
        <img src="src/eu-sabo-muito.png">
        <span class="tempo">12:01</span>
        <h3>Robertin Rei Delas</h3>
        <p>Qlf, visão, cria.</p>
       
    </div>
    
    <div class="chat-container">
        <img src="src/sabar muito.jpg">
        <span class="tempo">12:03</span>
        <h3>Nicola Tesla</h3>
        <p>Tu viu aquela fita lá daquele bagulho lá que...</p>
        
    </div>
    
    <div class="chat-container">
        <img src="src/sem foto.png">
        <span class="tempo">12:55</span>
        <h3>Agiota</h3>
        <p>3 MESES ESPERANDO O PAGAMENTO</p> 
    </div>
        `;
    }


}

customElements.define('my-contacts', MyContacts);