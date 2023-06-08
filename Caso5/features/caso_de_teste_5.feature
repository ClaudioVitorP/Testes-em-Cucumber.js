Feature: Security System Availability

  Scenario: Check if the elevator security system is available and operational
    Given the elevator security system is installed and configured correctly
    When a user wants to use the elevator or when the elevator is in standby mode to be used
    Then the elevator security system must be available and operational, ensuring user safety is maintained at all times