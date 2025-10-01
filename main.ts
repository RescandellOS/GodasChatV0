input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onGesture(Gesture.TiltRight, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
    if (x == 5) {
        x = 0
        y = 0
        led.unplot(x, y)
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("player send the message!")
    pins.digitalWritePin(DigitalPin.P0, 1)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.LogoDown, function () {
    led.unplot(x, y)
    y += -1
    led.plot(x, y)
})
input.onGesture(Gesture.LogoUp, function () {
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
})
let x = 0
let y = 0
radio.setGroup(1)
y = 0
x = 0
led.plot(0, 0)
basic.forever(function () {
	
})
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("C C5 A C5 C G E D ", 120), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("C5 C5 C5 G G E E C ", 109), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C C5 C5 C E D C ", 182), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C C C C C C C ", 182), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    music.play(music.stringPlayable("C5 C5 C D E E G G ", 182), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 F E D C C C ", 182), music.PlaybackMode.UntilDone)
    basic.pause(5000)
})
