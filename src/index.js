'use strict';

/**
 * @class DeltaE
 * @classdesc
 * A package of dE76, dE94, and dE00 algorithms.
 * @constructs DeltaE
 * @example
 * var DeltaE = new DeltaE();
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE94(labColor1, labColor2);
 */
var dE76 = require('./dE76');
var dE94 = require('./dE94');
var dE00 = require('./dE00');

function DeltaE() {}

/**
 * The CIE76 color difference algorithm: a simple euclidean distance calculation.
 * http://en.wikipedia.org/wiki/Color_difference#CIE76
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @returns {number} The computed dE76 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE76(labColor1, labColor2);
 */
DeltaE.prototype.getDeltaE76 = function(lab1, lab2) {
    var deltaE = new dE76(lab1, lab2);
    return deltaE.getDeltaE();
};

/**
 * The CIE94 algorithm: an iteration of the CIE76 algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @returns {number} The computed dE94 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE94(labColor1, labColor2);
 */
DeltaE.prototype.getDeltaE94 = function(lab1, lab2) {
    var deltaE = new dE94(lab1, lab2);
    return deltaE.getDeltaE();
};

/**
 * The CIE2000 color difference algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @returns {number} The computed dE00 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE00(labColor1, labColor2);
 */
DeltaE.prototype.getDeltaE00 = function(lab1, lab2) {
    var deltaE = new dE00(lab1, lab2);
    return deltaE.getDeltaE();
};

module.exports = new DeltaE;