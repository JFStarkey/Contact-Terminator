import { Desktop } from "@wxcc-desktop/sdk";

console.log("=================================");
console.log("CONTACT TERMINATOR STARTING");
console.log("=================================");

Desktop.config.init();

console.log(
    "Desktop SDK Loaded:",
    Desktop
);

console.log(
    "Desktop Actions:",
    Desktop.actions
);

console.log(
    "Desktop Agent Contact:",
    Desktop.agentContact
);