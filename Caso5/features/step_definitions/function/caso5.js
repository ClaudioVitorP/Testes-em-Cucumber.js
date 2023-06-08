function checkSecuritySystemAvailability(installed, configured, request) {
  if (installed && configured && (request || standbyMode)) {
    console.log('The elevator security system is available and operational.');
    return true;
  } else {
    console.log('The elevator security system is not available.');
    return false;
  }
}

module.exports = { checkSecuritySystemAvailability };
