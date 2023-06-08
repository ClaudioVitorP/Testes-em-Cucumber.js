function checkSensors(sensorStates) {
  for (const sensor of sensorStates) {
    if (sensor !== "OK") {
      return false;
    }
  }
  return true;
}

module.exports = checkSensors;
