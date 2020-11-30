while (true) {
    console.log("Temperature is: " + input.temperature(TemperatureUnit.Fahrenheit) + "F  ")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 72) {
        light.setAll(light.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 70) {
        light.setAll(light.rgb(0, 0, 255))
        pause(500)
        forever(function on_forever() {
            pause(500)
        })
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
