let x = input.temperature(TemperatureUnit.Fahrenheit)
let y = input.temperature(TemperatureUnit.Celsius)
while (true) {
    console.log("Temperature is: " + x + "F - " + y + "C")
    if (x > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (x < 70 && x > 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
