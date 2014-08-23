'use strict';

function DefaultRegistry(){
  this.tasks = {};
}

DefaultRegistry.prototype.get = function get(name){
  return this.tasks[name];
};

DefaultRegistry.prototype.set = function set(name, fn){
  this.tasks[name] = fn;
};

module.exports = DefaultRegistry;
