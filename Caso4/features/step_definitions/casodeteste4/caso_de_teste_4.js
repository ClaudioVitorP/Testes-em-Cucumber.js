const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { openElevatorDoors, closeElevatorDoors, detectMovement } = require('../function/caso4');

Given('the elevator doors are open', function () {
  openElevatorDoors();
});

When('a specified time elapses without detecting any movement in the path of the doors by the sensor', function () {
  const specifiedTime = 5000; // milliseconds

  console.log('Specified time elapsed. No movement detected.');

  const timer = setTimeout(() => {
    clearTimeout(timer);
    closeElevatorDoors();
  }, specifiedTime);
});

Then('the doors should close automatically', function () {
  const doorsAreClosed = !detectMovement();

  console.log('The doors are closed:', doorsAreClosed);

  assert.strictEqual(doorsAreClosed, true, 'The doors were not closed automatically.');
});