let doorsOpen = false;

function openElevatorDoors() {
  doorsOpen = true;
}

function closeElevatorDoors() {
  doorsOpen = false;
}

function detectMovement() {
  return false;
}

module.exports = {
  openElevatorDoors,
  closeElevatorDoors,
  detectMovement
};