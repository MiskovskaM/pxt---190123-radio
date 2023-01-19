radio.setTransmitPower(4);
radio.setFrequencyBand(7);

radio.setTransmitSerialNumber(true);
radio.setGroup(1)
const mySerial = control.deviceSerialNumber()
console.logValue("serial:", mySerial + "\n\r")

let actualCode = 7;



radio.onReceivedNumber((receivedNumber: number) => {
    const remoteSerial = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    console.logValue("BaconId" + remoteSerial, receivedNumber + "\n\r")
    basic.showNumber(actualCode)
})

radio.onReceivedValue(function (key: string, value: number) {
    if (mySerial === parseInt(key)) {
        console.logValue(key, value)
        radio.sendNumber(56)
    }
    if (key === "grp") {
        console.logValue("newgroup", value)
    }
    console.log("\n\r")

})
