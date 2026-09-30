import { Desktop } from "@wxcc-desktop/sdk";

class ContactTerminator extends HTMLElement {

    connectedCallback() {

        console.log("CONTACT TERMINATOR STARTED");

        this.innerHTML = `
            <div style="padding:20px;">
                <h2>Contact Terminator</h2>
                <p>Widget Loaded</p>
            </div>
        `;

        try {

            Desktop.config.init();

            console.log(
                "Desktop SDK Loaded"
            );

        }
        catch (error) {

            console.error(
                "SDK Init Failed",
                error
            );

        }

    }

}

customElements.define(
    "contact-terminator",
    ContactTerminator
);