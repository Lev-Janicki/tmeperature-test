x = input.temperature(TemperatureUnit.FAHRENHEIT)
y = input.temperature(TemperatureUnit.CELSIUS)
while True:
    print("Temperature is: " +x+"F - " +y+"C")
    if x > 70:  
        light.set_all(light.rgb(255,0,0))
    elif x<70 and x>40:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb(0,0,255))