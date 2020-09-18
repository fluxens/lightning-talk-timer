function blinkenlights (p_main_secs: number, p_final_secs: number, p_millis: number, p_leds: number) {
    i = 0
    while (i != p_leds) {
        basic.pause(p_main_secs / p_leds * p_millis)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(p_final_secs / p_leds * p_millis)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        i += 1
    }
    i = 0
    while (i != leds) {
        basic.pause(p_final_secs / p_leds * p_millis)
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        i += 1
    }
    for (let index = 0; index < 5; index++) {
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
    blinkenlights(main_secs, final_secs, millis_in_sec, leds)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    millis_in_sec = 40
    blinkenlights(main_secs, final_secs, millis_in_sec, leds)
    basic.clearScreen()
})
let millis_in_sec = 0
let i = 0
let final_secs = 0
let main_secs = 0
let strip: neopixel.Strip = null
let leds = 0
leds = 16
strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.clear()
strip.show()
main_secs = 240
final_secs = 30
