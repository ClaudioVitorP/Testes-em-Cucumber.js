const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { checkSensorResponseTime } = require('../function/caso6');

Given('the sensors are operational and in proper conditions', function () {
  this.operationalSensors = true;
});

When('an event or condition occurs that requires a response from the sensors', function () {
  this.eventRequiresSensorResponse = true;
});

Then('the sensors must provide a response within a maximum time of 3 seconds', function () {
  const maximumTime = 3000; // Maximum time in milliseconds (3 seconds)
  const sensorResponse = checkSensorResponseTime(this.operationalSensors, this.eventRequiresSensorResponse);

  assert.ok(sensorResponse, 'The sensor response did not occur within the specified maximum time.');
});