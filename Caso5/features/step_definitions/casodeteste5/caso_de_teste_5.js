const { Given, When, Then } = require('cucumber');
const { checkSecuritySystemAvailability } = require('../function/caso5')

Given('the elevator security system is installed and configured correctly', function () {
  this.securitySystemInstalledCorrectly = true;
  this.securitySystemConfiguredCorrectly = true;
});

When('a user wants to use the elevator or when the elevator is in standby mode to be used', function () {
  this.userRequest = true;
  this.standbyMode = true;
});

Then('the elevator security system must be available and operational, ensuring user safety is maintained at all times', function () {
  const securitySystemAvailability = checkSecuritySystemAvailability(
    this.securitySystemInstalledCorrectly,
    this.securitySystemConfiguredCorrectly,
    this.userRequest || this.standbyMode
  );
  console.log(securitySystemAvailability);
});
