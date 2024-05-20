class MyContacts extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="contatos/contatos.css">
        <aside>
            <h2>Chats</h2>

            <div class="chat-container">

            
            <my-avatar class="avatar"></my-avatar>

            <div class="contact-info">
                <div class="contact-header">

                    <h3>Robertin Rei Delas</h3>
                    <span class="tempo">12:01</span>
                </div>
                

                <p class="contact-message">Qlf, visão, cria.</p>

            </div>

            
            </div>
        </aside>
        `;
  }
}

customElements.define("my-contacts", MyContacts);
