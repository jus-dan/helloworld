input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Silly)
})
basic.showIcon(IconNames.Yes)
let counter = 0
basic.forever(function () {
    counter += 1
    basic.showNumber(counter)
    basic.pause(2000)
})
