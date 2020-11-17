let x = input.temperature(TemperatureUnit.Fahrenheit)
while (true) {
    console.log("Temperature is (F): " + input.temperature(TemperatureUnit.Fahrenheit))
    if (x < 75) {
        light.showAnimation(light.rainbowAnimation, 500)
    }
    
}
