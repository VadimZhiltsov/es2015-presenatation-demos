"use strict";

var bony = {
  _name: "Bony",
  _friends: ["Clide"],
  printFriends: function printFriends() {
    this._friends.forEach(function (f) {
      console.log(this._name + " knows " + f);
    });
  }
};
bony.printFriends();

var bob = {
  _name: "Han Solo",
  _friends: ["Obivan Kenoby", "Chubaka"],
  printFriends: function printFriends() {
    var _this2 = this;

    var _this = 123;
    this._friends.forEach(function (f) {
      console.log(_this2._name + " knows " + f + _this);
    });
  }
};

bob.printFriends();