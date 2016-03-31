class Human {
  static prop = "Hey, I'm property"
  
  constructor(name) {
    this.name = name;
  }

  say(message){
    
  }
}


class King extends Human {
  say(message){
    console.log("Attention! The King's Speech!");
    super.say(message);
  }
}

var joe = new Human('Joe')
var ludovicus = new King('Ludovicus')

joe.say("King is stupd");
ludovicus.say("I love cheese");