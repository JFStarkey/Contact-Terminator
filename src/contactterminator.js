import { Desktop } from "@wxcc-desktop/sdk";

console.log("=================================");
console.log("CONTACT TERMINATOR STARTING");
console.log("=================================");

class ContactTerminator extends HTMLElement {

    async connectedCallback() {

        this.innerHTML = `
            <h2>Contact Terminator</h2>
            <div id="status">Initializing...</div>
        `;

        try {

            Desktop.config.init();

            document.getElementById(
                "status"
            ).innerText =
                "SDK Connected";

            console.log(
                "Desktop Object:",
                Desktop
            );

            console.log(
                "Desktop Keys:",
                Object.keys(Desktop)
            );

        }
        catch (error) {

            console.error(
                "SDK INIT FAILED",
                error
            );

            document.getElementById(
                "status"
            ).innerText =
                "SDK Failed";

        }

    }

}

customElements.define(
    "contact-terminator",
    ContactTerminator
);

document.body.appendChild(
    document.createElement(
        "contact-terminator"
    )
);