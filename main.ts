light.setBrightness(5)
// x = input.temperature(TemperatureUnit.FAHRENHEIT)
// y = input.temperature(TemperatureUnit.CELSIUS)
while (true) {
    console.log("Temperature is: " + input.temperature(TemperatureUnit.Fahrenheit) + "F  ")
    // +y+"C")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
