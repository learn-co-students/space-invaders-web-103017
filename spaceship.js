class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = this.docked();
    this.phasersCharge = 'uncharged';
    this.assignSpaceship();
  }
  docked(){
    if (this.crew.length > 0) {
      return this.docked = false;
    }else {
      return this.docked = true;
    }
    // return this.crew.length === 0 ? this.docked = true : this.docked = false;
  }
  assignSpaceship(){
    this.crew.forEach((member) => member.currentShip = this)
  }

}
//
// const spaceship = new Spaceship('The Krestel', [tristan, jon, katie], 5, 4);
