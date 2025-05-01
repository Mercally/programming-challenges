function findMaxTemperature(n, temperatureChange) {
    var maxTemperature = -100;
    for (var i = 0; i <= n; i++) {
        if (temperatureChange[i] > maxTemperature) {
            maxTemperature = temperatureChange[i];
        }
    }
    return maxTemperature;
}
var max = findMaxTemperature(5, [10, -5, 7, -3, 20]);
var answer = 20;
var result = max == answer;
console.log(result
    ? "Ok: Max temperature is '".concat(max, "'")
    : "Fail: Temperature should be '".concat(answer, "' not '").concat(max, "'"));
max = findMaxTemperature(3, [1, -2, 1]);
answer = 1;
result = max == answer;
console.log(result
    ? "Ok: Max temperature is '".concat(max, "'")
    : "Fail: Temperature should be '".concat(answer, "' not '").concat(max, "'"));
max = findMaxTemperature(3, [-1, -2, -3]);
answer = -1;
result = max == answer;
console.log(result
    ? "Ok: Max temperature is '".concat(max, "'")
    : "Fail: Temperature should be '".concat(answer, "' not '").concat(max, "'"));
