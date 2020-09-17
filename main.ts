input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    i = leds
    while (i != 0) {
        basic.pause(s_main / leds * 1000)
        i += -1
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    i = leds
    while (i != 0) {
        basic.pause(s_grace / leds * 1000)
        i += -1
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    }
    i = leds
    while (i != 0) {
        basic.pause(s_final / leds * 1000)
        i += -1
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    for (let index = 0; index < 6; index++) {
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
    }
})
let i = 0
let s_final = 0
let s_grace = 0
let s_main = 0
let strip: neopixel.Strip = null
let leds = 0
leds = 16
strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)
s_main = 10
s_grace = 10
s_final = 10
basic.forever(function () {
	
})
