x = input.temperature(TemperatureUnit.FAHRENHEIT)
while True:
    print("Temperature is (F): " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if x < 75:   
        light.show_animation(light.rainbowAnimation, 500)