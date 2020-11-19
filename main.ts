let x = input.temperature(TemperatureUnit.Fahrenheit)
let y = input.temperature(TemperatureUnit.Celsius)
while (true) {
    console.log("Temperature is: " + x + "F - " + y + "C")
    if (x < 75) {
        light.showAnimation(light.rainbowAnimation, 500)
    }
    
}
