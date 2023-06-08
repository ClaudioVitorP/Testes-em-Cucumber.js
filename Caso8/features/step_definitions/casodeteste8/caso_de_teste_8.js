const { Given, When, Then } = require('cucumber');
const { simulateSensorFailureOrRiskSituation, triggerSafetySystem, checkSafetySystemResponseTime, getResponseTime } = require('../function/caso8');

Given('a failure occurs in one of the sensors or a risk situation is detected', function () {
  simulateSensorFailureOrRiskSituation();
});

When('the safety system is triggered', function () {
  triggerSafetySystem();
});

Then(
  'the safety system should provide a response within the specified maximum time, taking necessary measures to ensure user safety',
  function (callback) {
    const startTime = Date.now();
    checkSafetySystemResponseTime()
      .then(() => {
        const responseTime = getResponseTime(startTime);
        console.log('The safety system responded within the specified maximum time.');
        console.log('Response time: ' + responseTime + ' seconds');
        callback();
      })
      .catch((error) => {
        console.error('Error:', error.message);
        callback(error);
      });
  }
);