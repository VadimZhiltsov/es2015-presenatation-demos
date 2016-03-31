var bony = {
  _name: "Bony",
  _friends: ["Clide"],
  printFriends() {
    this._friends.forEach(function(f){
      console.log(this._name + " knows " + f);
    });
  }
};
bony.printFriends();

var bob = {
  _name: "Han Solo",
  _friends: ["Obivan Kenoby", "Chubaka"],
  printFriends() {
    let _this = 123;
    this._friends.forEach(f => {
      console.log(this._name + " knows " + f + _this);
    });
  }
};

bob.printFriends();