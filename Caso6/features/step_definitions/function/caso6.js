function checkSensorResponseTime(operationalSensors, eventRequiresSensorResponse) {
  if (operationalSensors && eventRequiresSensorResponse) {
    console.log('The sensors provided a response within the specified maximum time.');
    return true;
  } else {
    console.log('The sensors did not provide a response within the specified maximum time.');
    return false;
  }
}

module.exports = { checkSensorResponseTime };