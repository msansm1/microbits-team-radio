function changeCanal() {
    band++;
    if (band > 83) {
        band = 0;
    }
    radio.setFrequencyBand(band);
    basic.showNumber(band);
}
function selectIcon() {
    baseIcon++;
    if (baseIcon > 39) {
        baseIcon = 0;
    }
    basic.showIcon(baseIcon);
}
radio.onReceivedString(function (message) {
	afficherMessage(message);
})
function afficherMessage (message: string) {
    const icon = message.split("|")[1];
    basic.showIcon(parseInt(icon));
}
let localId = randint(0, 9999)
let band = 0;
let baseIcon = 0;
radio.setFrequencyBand(band);
radio.setTransmitSerialNumber(true)
input.onLogoEvent(TouchButtonEvent.Touched, changeCanal)
input.onButtonPressed(Button.A, selectIcon);
//input.onButtonPressed(Button.B, sendIcon);