const template = document.createElement("template");

template.innerHTML = `
<style>

:host {
    display: block;
    width: 100%;
    height: 100%;
    font-family: "Segoe UI", sans-serif;
}

.container {
    padding: 20px;
    background: #ffffff;
    color: #000000;
    min-height: 100vh;
    box-sizing: border-box;
}

h1 {
    margin: 0 0 20px 0;
    color: #003B71;
}

#callCount {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
}

.actionBar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#refreshBtn {
    background: #003B71;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
}

#refreshBtn:hover {
    background: #00264d;
}

#terminateBtn {
    background: #C00000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
}

#terminateBtn:hover {
    background: #8a0000;
}

.callCard {
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    background: #ffffff;
}

.callCard strong {
    display: block;
    margin-bottom: 4px;
}

.callDetails {
    flex: 1;
}

.emptyState {
    border: 1px dashed #cccccc;
    border-radius: 8px;
    padding: 25px;
    text-align: center;
    color: #666666;
}

input[type="checkbox"] {
    transform: scale(1.2);
    margin-top: 4px;
}

@media (prefers-color-scheme: dark) {

    .container {
        background: #1e1e1e;
        color: #ffffff;
    }

    .callCard {
        background: #2d2d2d;
        border-color: #555555;
    }

    .emptyState {
        border-color: #555555;
        color: #cccccc;
    }

    #refreshBtn {
        background: #1f4f8c;
    }

    #terminateBtn {
        background: #d13438;
    }

    input[type="checkbox"] {
        accent-color: #d13438;
    }
}

</style>

<div class="container">

    <h1>Contact Terminator</h1>

    <div id="callCount">
        Active Calls: 0
    </div>

    <div class="actionBar">

        <button id="refreshBtn">
            Refresh Contacts
        </button>

        <button id="terminateBtn">
            Terminate Selected
        </button>

    </div>

    <div id="callsContainer">

        <div class="emptyState">
            No contacts loaded.
        </div>

    </div>

</div>
`;

class ContactTerminator extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({
            mode: "open"
        });

        this.shadowRoot.appendChild(
            template.content.cloneNode(true)
        );
    }

    connectedCallback() {

        console.log(
            "CONTACT TERMINATOR STARTED"
        );

        this.initializeEvents();

        // TEMP TEST DATA
        // Remove this later when API call is added.
        this.renderCalls([
            {
                queue: "Reception",
                ani: "6125551212",
                waitTime: "00:01:42",
                interactionId: "ABC123"
            },
            {
                queue: "Customer Service",
                ani: "9525551000",
                waitTime: "00:03:18",
                interactionId: "XYZ789"
            }
        ]);
    }

    initializeEvents() {

        const refreshBtn =
            this.shadowRoot.getElementById(
                "refreshBtn"
            );

        const terminateBtn =
            this.shadowRoot.getElementById(
                "terminateBtn"
            );

        refreshBtn.addEventListener(
            "click",
            () => {

                console.log(
                    "Refresh Contacts clicked"
                );

            }
        );

        terminateBtn.addEventListener(
            "click",
            () => {

                const selected =
                    this.shadowRoot.querySelectorAll(
                        ".callCheckbox:checked"
                    );

                console.log(
                    "Selected contacts:",
                    selected.length
                );

            }
        );
    }

    renderCalls(calls) {

        const container =
            this.shadowRoot.getElementById(
                "callsContainer"
            );

        const callCount =
            this.shadowRoot.getElementById(
                "callCount"
            );

        callCount.textContent =
            `Active Calls: ${calls.length}`;

        container.innerHTML = "";

        calls.forEach(call => {

            const card =
                document.createElement("div");

            card.classList.add(
                "callCard"
            );

            card.innerHTML = `
                <input
                    type="checkbox"
                    class="callCheckbox"
                    data-id="${call.interactionId}"
                >

                <div class="callDetails">

                    <strong>Queue:<strong>
                    ${call.queue}

                    <br><br>

                    <strong>ANI:<strong>
                    ${call.ani}

                    <br><br>

                    <strong>Wait Time:<strong>
                    ${call.waitTime}

                    <br><br>

                    <strong>Interaction ID:<strong>
                    ${call.interactionId}

                </div>
            `;

            container.appendChild(
                card
            );

        });

    }

}

customElements.define(
    "contact-terminator",
    ContactTerminator
);