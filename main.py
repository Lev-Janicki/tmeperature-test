light.set_brightness(5)
#x = input.temperature(TemperatureUnit.FAHRENHEIT)
#y = input.temperature(TemperatureUnit.CELSIUS)
while True:
    print("Temperature is: " +input.temperature(TemperatureUnit.FAHRENHEIT)+"F  ") #+y+"C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:  
        light.set_all(light.rgb(0,0,255))
    elif input.temperature(TemperatureUnit.FAHRENHEIT)>40:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb(255,0,0))
