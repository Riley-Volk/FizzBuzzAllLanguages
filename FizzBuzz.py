'''
Writing FizzBuzz with Python.

author - Riley Volk
date - 02.02.2020
'''
# FizzBuzz Class
class FizzBuzzClass:
    def FizzBuzz(x = 1):
        while x <= 100:
            if x % 15 == 0:
                print("FizzBuzz")
            elif x % 5 == 0:
                print("Buzz")
            elif x % 3 == 0:
                print("Fizz")
            else:
                print(x)
            x += 1

FizzBuzzClass.FizzBuzz()
