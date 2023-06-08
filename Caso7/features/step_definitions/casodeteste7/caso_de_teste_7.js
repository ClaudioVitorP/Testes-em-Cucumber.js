const { Given, When, Then } = require('cucumber');
const { FailureRate } = require('../function/caso7');

Given('that the elevator safety system is installed and configured correctly', function () { });

When('the elevator is in use or in standby mode to be used, during normal operation over a period of 1 year', function () { });

Then('the elevator safety system should demonstrate a failure rate lower than {float}%, ensuring that the occurrence of failures or errors that may compromise user safety is minimized', function (float) {
  const failureRateLimit = float;
  const failureRate = FailureRate();

  if (failureRate < failureRateLimit) {
    console.log(`The safety system failure rate (${failureRate}%) is lower than ${failureRateLimit}%`);
  } else {
    console.log(`The safety system failure rate (${failureRate}%) is equal to or higher than ${failureRateLimit}%`);
    throw new Error(`The safety system failure rate is equal to or higher than ${failureRateLimit}%`);
  }
});
