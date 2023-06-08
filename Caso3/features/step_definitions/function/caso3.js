function activateEmergencyStopSystem(equipmentFailure, internalEmergencyButtonPressed) {
  if (equipmentFailure || internalEmergencyButtonPressed) {
    stopElevatorMovement();
    activateEmergencyAlarms();
    triggerEmergencyServices();
    return true;
  } else {
    return false;
  }
}

function stopElevatorMovement() { }

function activateEmergencyAlarms() { }

function triggerEmergencyServices() { }

module.exports = {
  activateEmergencyStopSystem,
  stopElevatorMovement,
  activateEmergencyAlarms,
  triggerEmergencyServices
};