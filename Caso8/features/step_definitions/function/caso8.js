function simulateSensorFailureOrRiskSituation() {
  console.log('Failure in one of the sensors or detection of a risk situation.');
}

function triggerSafetySystem() {
  console.log('Triggering the safety system.');
}

function checkSafetySystemResponseTime() {
  const maximumResponseTime = 5000;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const systemRespondedWithinMaximumTime = true;

      if (systemRespondedWithinMaximumTime) {
        resolve();
      } else {
        reject(new Error('The safety system did not respond within the specified maximum time.'));
      }
    }, maximumResponseTime);
  });

  return promise;
}

function getResponseTime(startTime) {
  const responseTimeInMilliseconds = Date.now() - startTime;
  const responseTimeInSeconds = responseTimeInMilliseconds / 1000;

  return responseTimeInSeconds;
}

module.exports = {
  simulateSensorFailureOrRiskSituation,
  triggerSafetySystem,
  checkSafetySystemResponseTime,
  getResponseTime
};
