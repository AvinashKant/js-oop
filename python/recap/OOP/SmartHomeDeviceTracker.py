"""
Smart Home Device Tracker
You’re building a Smart Home Device Tracker to monitor the status of electronic devices.
Your Tasks:

Create a class called SmartDevice.

Add a class attribute brand = "HomeTech" (default manufacturer).

In the constructor, accept:

device_name: Name of the smart device.

power_status: True (ON) or False (OFF).

Shadow the class attribute brand by assigning self.brand = "CustomBrand" (to simulate user modification).

Define a method get_status():

Returns a string like: "AC is ON - CustomBrand" or "Fan is OFF - CustomBrand" based on power_status.
"""
class SmartDevice:
    brand = "HomeTech" 
 
    def __init__(self, device_name: str, power_status: bool):
        self.device_name = device_name        
        self.power_status = power_status     
        self.brand = "CustomBrand"  # Attribute shadowing
 
    def get_status(self) -> str:
        status = "ON" if self.power_status else "OFF"
        return f"{self.device_name} is {status} - {self.brand}"
