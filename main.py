x = input.temperature(TemperatureUnit.FAHRENHEIT)
y = input.temperature(TemperatureUnit.CELSIUS)
while True:
    print("Temperature is (F): " +x)
    print("Temperature(C): " +y)
    if x < 75:  
        light.show_animation(light.rainbowAnimation, 500)