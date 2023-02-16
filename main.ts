basic.showIcon(IconNames.Happy)
let state = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        state += 1
    }
    if (state > 1) {
        state = 0
    }
})
basic.forever(function () {
    if (state == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (state == 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
