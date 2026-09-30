class ContactTerminator extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="padding:20px;">
                <h2>Contact Terminator</h2>

                <button id="refreshBtn">
                    Refresh Contacts
                </button>

                <table id="contactsTable" style="width:100%;margin-top:20px;">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Queue</th>
                            <th>ANI</th>
                            <th>Wait Time</th>
                            <th>Interaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

                <button id="terminateBtn"
                        style="margin-top:20px;">
                    Terminate Selected
                </button>
            </div>
        `;
    }
}

customElements.define(
    "contact-terminator",
    ContactTerminator
);