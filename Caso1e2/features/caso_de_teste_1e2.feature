Feature: Sensor Verification

  Scenario: System operable with all sensors in "OK" state
    Given that the sensors are in the following states:
      | Sensor           | State |
      | Cable Tensioning | OK    |
      | Doors Closed     | OK    |
      | Overload         | OK    |
    When someone wants to use the system
    Then the system should grant permission to operate

  Scenario Outline: System not operable when a sensor is not in "OK" state
    Given that the sensors are in the following states:
      | Sensor           | State            |
      | Cable Tensioning | <cable_state>    |
      | Doors Closed     | <door_state>     |
      | Overload         | <overload_state> |
    When someone wants to use the system
    Then the system should not grant permission to operate

    Examples:
      | cable_state | door_state | overload_state |
      | Failure     | OK         | OK             |
      | OK          | Failure    | OK             |
      | OK          | OK         | Failure        |
      | Failure     | Failure    | OK             |
      | Failure     | OK         | Failure        |
      | OK          | Failure    | Failure        |
      | Failure     | Failure    | Failure        |

