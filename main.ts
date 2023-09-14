input.onButtonPressed(Button.A, function () {
    oprava = zrychleni
})
function mereni () {
    vaha = 0
    zrychleni = input.acceleration(Dimension.X)
    naklon = zrychleni - oprava
    if (naklon > 20) {
        vaha = -1
    }
    if (naklon > 50) {
        vaha = -2
    }
    if (naklon < -20) {
        vaha = 1
    }
    if (naklon < -50) {
        vaha = 2
    }
}
let naklon = 0
let zrychleni = 0
let oprava = 0
let vaha = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
vaha = 0
oprava = 0
let puvodni = 99
basic.forever(function () {
    mereni()
    if (puvodni != vaha) {
        led.unplot(puvodni + 2, 2)
        led.plot(vaha + 2, 2)
        puvodni = vaha
    }
    basic.pause(100)
})
