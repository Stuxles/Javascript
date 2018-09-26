class Passenger {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

let user = new Passenger("Bob");
user.sayHi();