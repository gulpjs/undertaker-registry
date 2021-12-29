'use strict';

var expect = require('expect');

var Registry = require('../');

function noop() {}

describe('undertaker-registry', function () {
  describe('constructor', function () {
    it('can be constructed with new', function (done) {
      var reg = new Registry();
      expect(typeof reg.get).toEqual('function');
      expect(typeof reg.set).toEqual('function');
      expect(typeof reg.tasks).toEqual('function');
      done();
    });

    it('can be constructed without new', function (done) {
      /* eslint new-cap: 0 */
      var reg = Registry();
      expect(typeof reg.get).toEqual('function');
      expect(typeof reg.set).toEqual('function');
      expect(typeof reg.tasks).toEqual('function');
      done();
    });
  });

  describe('init', function () {
    it('is a noop', function (done) {
      var reg = new Registry();
      expect(typeof reg.init).toEqual('function');
      done();
    });
  });

  describe('get', function () {
    it('returns a task from the registry', function (done) {
      var reg = new Registry();
      reg._tasks.test = noop;
      expect(reg.get('test')).toEqual(noop);
      done();
    });
  });

  describe('set', function () {
    it('registers a task', function (done) {
      var reg = new Registry();
      reg.set('test', noop);
      expect(reg._tasks.test).toEqual(noop);
      done();
    });

    it('returns the task (useful for inheriting)', function (done) {
      var reg = new Registry();
      var task = reg.set('test', noop);
      expect(task).toEqual(noop);
      done();
    });
  });

  describe('tasks', function () {
    it('returns an object of task name->functions', function (done) {
      var reg = new Registry();
      reg.set('test1', noop);
      reg.set('test2', noop);
      expect(reg.tasks()).toEqual({ test1: noop, test2: noop });
      done();
    });
  });
});
