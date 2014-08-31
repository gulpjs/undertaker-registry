'use strict';

function DefaultRegistry(){
  this._tasks = {};
}

DefaultRegistry.prototype.get = function get(name){
  return this._tasks[name];
};

DefaultRegistry.prototype.set = function set(name, fn){
  this._tasks[name] = fn;
};

DefaultRegistry.prototype.tasks = function tasks(){
  return Object.keys(this._tasks).map(this.get, this);
};

module.exports = DefaultRegistry;
