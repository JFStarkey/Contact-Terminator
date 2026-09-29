import { Desktop } from "@wxcc-desktop/sdk";

console.log("CONTACT TERMINATOR STARTING");

try {

    Desktop.config.init();

    console.log(
        "Desktop SDK Loaded"
    );

}
catch (error) {

    console.log(
        "Not running inside WxCC Desktop"
    );

    console.error(error);

}