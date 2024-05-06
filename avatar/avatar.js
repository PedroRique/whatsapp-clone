class MyAvatar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="avatar/avatar.css">
            <div class="avatar-container">
                <img class="avatar-image" src="images/avatar.jpg" alt="Avatar">
            </div>
        `;
    }


}

customElements.define('my-avatar', MyAvatar);