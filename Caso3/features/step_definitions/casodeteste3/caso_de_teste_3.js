const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { activateEmergencyStopSystem } = require('../function/caso3');

Given('there was a equipment failure or the internal emergency button was pressed', function () {
  this.equipmentFailure = true;
  this.internalEmergencyButtonPressed = false;
});

When('the emergency stop button is pressed or when an emergency situation is detected', function () {
  this.equipmentFailure = true;
  this.internalEmergencyButtonPressed = false;
});

Then('the elevator system must immediately stop movement, activate alarms, and trigger emergency services', function () {
  const result = activateEmergencyStopSystem(this.equipmentFailure, this.internalEmergencyButtonPressed);
  console.log('The emergency stop system was activated correctly.');
  assert.strictEqual(result, true, 'The emergency stop system was not activated correctly');
});

