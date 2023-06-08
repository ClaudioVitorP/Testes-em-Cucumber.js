Feature: Safety System Reliability

  Scenario: Evaluate the failure rate of the safety system over a period of 1 year
    Given that the elevator safety system is installed and configured correctly
    When the elevator is in use or in standby mode to be used, during normal operation over a period of 1 year
    Then the elevator safety system should demonstrate a failure rate lower than 0.01%, ensuring that the occurrence of failures or errors that may compromise user safety is minimized