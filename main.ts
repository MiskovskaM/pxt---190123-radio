
radio.setTransmitPower(4);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(1)
const mySerial = control.deviceSerialNumber()
console.logValue("serial:", mySerial + "\n\r")

let actualCode = 7;
let grp = 1
// 1.krok: poslat číslo - code, na zmáčknutí tlačítka A//

input.onButtonPressed(Button.A,function(){
  radio.sendNumber(actualCode)
  whaleysans.showNumber(actualCode)
})

//2.krok: když příjde seriový číslo, tak zjisti, jaké číslo to je//
  radio.onReceivedValue(function (receivedString: string, receivedValue: number){
    if(receivedString == mySerial) {
   whaleysans.showNumber(receivedValue)
    actualCode = receivedValue   
       }
                                                                  
    if (receivedString == "grp"){
      whaleysans.showNumber(receivedValue)
       grp = receivedValue
       radio.setGroup(grp)
}
  
radio.onReceivedString(function(receivedString: string){
    if(receivedString == "w"){
        basic.showString("WIN")
    }
})



/* radio.onReceivedNumber((receivedNumber: number) => {
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

}) */
  })