Feature: Automatic Door Closing

  Scenario: Automatic door closing after a period of inactivity
    Given the elevator doors are open
    When a specified time elapses without detecting any movement in the path of the doors by the sensor
    Then the doors should close automatically
