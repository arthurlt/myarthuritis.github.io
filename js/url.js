Function.prototype.bind = function(thisObj, var_args) {
  if (typeof(this) != "function") {
    throw new Error("Bind must be called as a method of a function object.");
  }

  var self = this;
  var staticArgs = Array.prototype.splice.call(arguments, 1, arguments.length);

  return function() {
    // make a copy of staticArgs (don't modify it because it gets reused for
    // every invocation).
    var args = staticArgs.concat();

    // add all the new arguments
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    // invoke the original function with the correct thisObj and the combined
    // list of static and dynamic arguments.
    return self.apply(thisObj, args);
  };
}
function $(o) { return document.getElementById(o); }

function Roller() {
  this.url_ = '';

  this.currentState_ = "/rollstate/".split("");
  this.startState_ = [];

  this.endState_ = [];
  this.endMap_ = [];
}

Roller.prototype.shuffleArray = function(arr) {
  var i = arr.length;
  while (--i) {
    var j = Math.floor( Math.random() * ( i + 1 ) );
    var tempi = arr[i];
    var tempj = arr[j];
    arr[i] = tempj;
    arr[j] = tempi;
  }
  return arr;
}

Roller.prototype.padArray = function(arr, size) {
  if (size <= arr.length) return;

  for (var i = arr.length; i < size; i++) {
    arr.push("");
  }
}

Roller.prototype.begin = function(url) {
  if (this.timer_) {
    window.clearTimeout(this.timer_);
  }

  this.endState_ = url.split("");
  this.startState_ = this.currentState_.slice();

  this.padArray(this.startState_, this.endState_.length);
  this.padArray(this.endState_, this.startState_.length);

  this.endMap_ = [];
  for (var i = 0; i < this.endState_.length; i++) {
    this.endMap_.push(i);
  }

  this.shuffleArray(this.endMap_);

  this.currentState_ = this.startState_.slice();
  this.roll();
}

Roller.prototype.roll = function() {
  this.currentState_[this.endMap_[0]] = this.endState_[this.endMap_[0]];
  this.endMap_ = this.endMap_.slice(1);

  window.history.pushState({}, "", this.currentState_.join(""));
  if (this.endMap_.length > 0) {
    this.timer_ = setTimeout(this.roll.bind(this), 20);
  }
}

var r = new Roller();