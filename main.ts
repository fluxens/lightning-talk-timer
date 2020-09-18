function blinkenlights (p_s_main: number, p_s_grace: number, p_s_final: number, p_millis: number, p_leds: number) {
    i = 0
    while (i != p_leds) {
        basic.pause(p_s_main / p_leds * p_millis)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(p_s_grace / p_leds * p_millis)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(p_s_final / p_leds * p_millis)
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
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    millis_in_sec = 1000
    blinkenlights(s_main, s_grace, s_final, millis_in_sec, leds)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    millis_in_sec = 40
    blinkenlights(s_main, s_grace, s_final, millis_in_sec, leds)
    basic.clearScreen()
})
let millis_in_sec = 0
let i = 0
let s_final = 0
let s_grace = 0
let s_main = 0
let strip: neopixel.Strip = null
let leds = 0
leds = 16
strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.clear()
strip.show()
s_main = 240
s_grace = 25
s_final = 30
