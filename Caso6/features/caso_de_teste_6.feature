Feature: Sensor Response Time

  Scenario: Check if the sensors provide a response within the specified maximum time
    Given the sensors are operational and in proper conditions
    When an event or condition occurs that requires a response from the sensors
    Then the sensors must provide a response within a maximum time of 3 seconds
