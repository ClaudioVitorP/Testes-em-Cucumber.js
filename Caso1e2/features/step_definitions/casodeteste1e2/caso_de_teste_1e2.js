const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const checkSensors = require('../function/caso1e2');

let sensorStatus = {};

Given('that the sensors are in the following states:', function (table) {
    sensorStatus = table.hashes();
});

When('someone wants to use the system', function () {
});

Then('the system should grant permission to operate', function () {
    const sensorStates = sensorStatus.map(sensor => sensor.State);
    const operablePermission = checkSensors(sensorStates);
    assert.strictEqual(operablePermission, true);
    console.log('Permission granted: the system can operate.');
});

Then('the system should not grant permission to operate', function () {
    const sensorStates = sensorStatus.map(sensor => sensor.State);
    const operablePermission = checkSensors(sensorStates);
    assert.strictEqual(operablePermission, false);
    console.log('Permission not granted: the system cannot operate.');
});

