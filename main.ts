input.onButtonPressed(Button.A, function () {
    i = 0
    while (i != leds) {
        basic.pause(s_main / leds * 1000)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_grace / leds * 1000)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_final / leds * 1000)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        i += 1
    }
    for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    i = 0
    while (i != leds) {
        basic.pause(s_main / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_grace / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_final / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        i += 1
    }
    for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(500)
    }
})
let cnt = 0
let i = 0
let millis_in_sec = 0
let s_final = 0
let s_grace = 0
let s_main = 0
let strip: neopixel.Strip = null
let leds = 0
leds = 16
strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)
strip.setBrightness(30)
s_main = 240
s_grace = 25
s_final = 30
millis_in_sec = 50
basic.forever(function () {
    basic.showNumber(cnt)
    i = 0
    while (i != leds) {
        basic.pause(s_main / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_grace / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(s_final / leds * millis_in_sec)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        i += 1
    }
    for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(500)
    }
    cnt += 1
})
