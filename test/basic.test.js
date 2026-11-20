"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { seconds } = require("../index.js");

test("hours and minutes", () => { assert.strictEqual(seconds("1h30m"), 5400); });
test("seconds only", () => { assert.strictEqual(seconds("45s"), 45); });
