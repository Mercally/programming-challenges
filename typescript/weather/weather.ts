function findMaxTemperature(n: number, temperatureChange: number[]): number {
    let maxTemperature: number = -100;

    for (let i: number = 0; i <= n; i++) {
        if (temperatureChange[i] > maxTemperature) {
            maxTemperature = temperatureChange[i];
        }
    }

    return maxTemperature;
}

let max: number = findMaxTemperature(5, [10, -5, 7, -3, 20]);
let answer: number = 20;
let result: boolean = max == answer;
console.log(
    result
        ? `Ok: Max temperature is '${max}'`
        : `Fail: Temperature should be '${answer}' not '${max}'`
);

max = findMaxTemperature(3, [1, -2, 1]);
answer = 1;
result = max == answer;
console.log(
    result
        ? `Ok: Max temperature is '${max}'`
        : `Fail: Temperature should be '${answer}' not '${max}'`
);

max = findMaxTemperature(3, [-1, -2, -3]);
answer = -1;
result = max == answer;
console.log(
    result
        ? `Ok: Max temperature is '${max}'`
        : `Fail: Temperature should be '${answer}' not '${max}'`
);
