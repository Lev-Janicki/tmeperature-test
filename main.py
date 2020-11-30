while True:
    print("Temperature is: " +input.temperature(TemperatureUnit.FAHRENHEIT)+"F  ") 
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 72:  
        light.set_all(light.rgb(255,0,0))
        pause(500)
        light.clear()
        pause(500)
    elif input.temperature(TemperatureUnit.FAHRENHEIT)<70:
        light.set_all(light.rgb(0,0,255))
        pause(500)
        def on_forever():
            pause(500)
        forever(on_forever)
    else:
        light.set_all(light.rgb(0,255,0))
