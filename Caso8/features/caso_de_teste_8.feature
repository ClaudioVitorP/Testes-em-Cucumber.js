Feature: Safety System Response Time

  Scenario: Verify if the safety system responds within the specified maximum time to detect failures or risk situations
    Given a failure occurs in one of the sensors or a risk situation is detected
    When the safety system is triggered
    Then the safety system should provide a response within the specified maximum time, taking necessary measures to ensure user safety
