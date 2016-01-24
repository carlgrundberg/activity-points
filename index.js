//Weight steps
var min_weight = 45;
var max_weight = 145;
var weights = [];
for (var i = min_weight; i <= max_weight; i += 5) {
    weights.push(i);
}

// Duration steps
var min_duration = 10;
var max_duration = 60;
var durations = [];
for (i = min_duration; i <= max_duration; i += 5) {
    durations.push(i);
}

//Possible intensity types
var intensity_types = ['low', 'moderate', 'high'];

var matrix = [
    [[0, 0, 1], [0, 1, 2], [1, 1, 2], [1, 1, 3], [1, 1, 3], [1, 2, 4], [1, 2, 5], [1, 2, 5], [2, 2, 6], [2, 3, 6], [2, 3, 7]],
    [[0, 1, 1], [1, 1, 2], [1, 1, 3], [1, 1, 3], [1, 2, 4], [1, 2, 4], [1, 2, 5], [2, 2, 6], [2, 2, 6], [2, 3, 7], [2, 3, 8]],
    [[0, 1, 1], [1, 1, 2], [1, 1, 3], [1, 1, 4], [1, 2, 4], [1, 2, 5], [2, 2, 6], [2, 3, 6], [2, 3, 7], [2, 3, 8], [2, 3, 8]],
    [[0, 1, 2], [1, 1, 2], [1, 1, 3], [1, 2, 4], [1, 2, 5], [2, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [2, 3, 8], [3, 4, 9]],
    [[0, 1, 2], [1, 1, 2], [1, 1, 3], [1, 2, 4], [1, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 7], [2, 3, 8], [3, 4, 9], [3, 4, 10]],
    [[1, 1, 2], [1, 1, 3], [1, 1, 4], [1, 2, 4], [2, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [3, 4, 9], [3, 4, 10], [3, 4, 11]],
    [[1, 1, 2], [1, 1, 3], [1, 2, 4], [1, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [2, 3, 9], [3, 4, 10], [3, 4, 11], [3, 5, 11]],
    [[1, 1, 2], [1, 1, 3], [1, 2, 4], [1, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [3, 4, 9], [3, 4, 10], [3, 4, 11], [3, 5, 12]],
    [[1, 1, 2], [1, 1, 3], [1, 2, 4], [2, 2, 5], [2, 3, 6], [2, 3, 8], [2, 3, 9], [3, 4, 10], [3, 4, 11], [3, 5, 12], [4, 5, 13]],
    [[1, 1, 2], [1, 1, 3], [1, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [3, 4, 9], [3, 4, 10], [3, 5, 11], [4, 5, 13], [4, 5, 14]],
    [[1, 1, 2], [1, 1, 4], [1, 2, 5], [2, 2, 6], [2, 3, 7], [2, 3, 8], [3, 4, 10], [3, 4, 11], [3, 5, 12], [4, 5, 13], [4, 6, 15]],
    [[1, 1, 3], [1, 2, 4], [1, 2, 5], [2, 3, 6], [2, 3, 8], [3, 4, 9], [3, 4, 10], [3, 5, 11], [4, 5, 13], [4, 6, 14], [4, 6, 15]],
    [[1, 1, 3], [1, 2, 4], [2, 2, 5], [2, 3, 7], [2, 3, 8], [3, 4, 9], [3, 4, 11], [3, 5, 12], [4, 5, 13], [4, 6, 15], [5, 6, 16]],
    [[1, 1, 3], [1, 2, 4], [2, 2, 6], [2, 3, 7], [2, 3, 8], [3, 4, 10], [3, 4, 11], [4, 5, 13], [4, 6, 14], [4, 6, 15], [5, 7, 17]],
    [[1, 1, 3], [1, 2, 4], [2, 2, 6], [2, 3, 7], [3, 4, 9], [3, 4, 10], [3, 5, 12], [4, 5, 13], [4, 6, 15], [5, 6, 16], [5, 7, 18]],
    [[1, 1, 3], [1, 2, 5], [2, 2, 6], [2, 3, 8], [3, 4, 9], [3, 4, 11], [3, 5, 12], [4, 5, 14], [4, 6, 15], [5, 7, 17], [5, 7, 18]],
    [[1, 1, 3], [1, 2, 5], [2, 3, 6], [2, 3, 8], [3, 4, 10], [3, 4, 11], [4, 5, 13], [4, 6, 14], [5, 6, 16], [5, 7, 18], [5, 8, 19]],
    [[1, 1, 3], [1, 2, 5], [2, 3, 7], [2, 3, 8], [3, 4, 10], [3, 5, 12], [4, 5, 13], [4, 6, 15], [5, 7, 17], [5, 7, 18], [6, 8, 20]],
    [[1, 1, 3], [1, 2, 5], [2, 3, 7], [2, 3, 9], [3, 4, 10], [3, 5, 12], [4, 5, 14], [4, 6, 15], [5, 7, 17], [5, 8, 19], [6, 8, 21]],
    [[1, 1, 4], [2, 2, 5], [2, 3, 7], [3, 4, 9], [3, 4, 11], [4, 5, 12], [4, 6, 14], [5, 6, 16], [5, 7, 18], [6, 8, 20], [6, 9, 21]],
    [[1, 1, 4], [2, 2, 6], [2, 3, 7], [3, 4, 9], [3, 4, 11], [4, 5, 13], [4, 6, 15], [5, 7, 17], [5, 7, 18], [6, 8, 20], [6, 9, 22]]
];

module.exports = {
    calculate: function (weight, duration, intensity) {
        if (isNaN(weight)) return new Error('Invalid weight');
        if (isNaN(duration)) return new Error('Invalid duration');
        intensity = intensity_types.indexOf(intensity);
        if (intensity == -1) return new Error('Invalid intensity');

        weight = 5 * Math.round(weight / 5);
        weight = Math.max(weight, min_weight);
        weight = Math.min(weight, max_weight);

        duration = 5 * Math.round(duration / 5);
        duration = Math.max(duration, min_duration);
        duration = Math.min(duration, max_duration);

        console.log("weight", weight);
        console.log("duration", duration);
        console.log("intensity", intensity);

        return matrix[weights.indexOf(weight)][durations.indexOf(duration)][intensity];
    }
};