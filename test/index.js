"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var Registry = require("../");

function noop() {}

describe("undertaker-registry", function () {
  describe("constructor", function () {
    it("can be constructed with new", function () {
      var reg = new Registry();
      assert.deepStrictEqual(typeof reg.get, "function");
      assert.deepStrictEqual(typeof reg.set, "function");
      assert.deepStrictEqual(typeof reg.tasks, "function");
    });

    it("can be constructed without new", function () {
      /* eslint new-cap: 0 */
      var reg = Registry();
      assert.deepStrictEqual(typeof reg.get, "function");
      assert.deepStrictEqual(typeof reg.set, "function");
      assert.deepStrictEqual(typeof reg.tasks, "function");
    });
  });

  describe("init", function () {
    it("is a noop", function () {
      var reg = new Registry();
      assert.deepStrictEqual(typeof reg.init, "function");
    });
  });

  describe("get", function () {
    it("returns a task from the registry", function () {
      var reg = new Registry();
      reg._tasks.test = noop;
      assert.deepStrictEqual(reg.get("test"), noop);
    });
  });

  describe("set", function () {
    it("registers a task", function () {
      var reg = new Registry();
      reg.set("test", noop);
      assert.deepStrictEqual(reg._tasks.test, noop);
    });

    it("returns the task (useful for inheriting)", function () {
      var reg = new Registry();
      var task = reg.set("test", noop);
      assert.deepStrictEqual(task, noop);
    });
  });

  describe("tasks", function () {
    it("returns an object of task name->functions", function () {
      var reg = new Registry();
      reg.set("test1", noop);
      reg.set("test2", noop);
      assert.deepStrictEqual(reg.tasks(), { test1: noop, test2: noop });
    });
  });
});
