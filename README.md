Activity points
===================

Calculate points for an activity based on your weight, duration, and intensity.

## Install

```javascript
npm install activity-points
```

## Usage

```javascript
var ap = require('activity-points');
var weight = '100'; // kg
var duration = '30'; // minutes
var intensity = 'moderate'; // low, moderate, high
var points = ap.calculate(weight, duration, intensity);
```
