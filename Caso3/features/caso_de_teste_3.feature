Feature: Emergency Stop System

  Scenario: Activation of the emergency stop system
  Given there was a equipment failure or the internal emergency button was pressed
  When the emergency stop button is pressed or when an emergency situation is detected
  Then the elevator system must immediately stop movement, activate alarms, and trigger emergency services
