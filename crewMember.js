class CrewMember{
  constructor(position){
    // this.name = name;
    this.position = position;
    this.currentShip = "Looking for a Rig";
    }
  // currentShip(ship){
  //   // debugger;
  //   if (ship) {
  //     return this.currentShip = ship;
  //   }else{
  //     return this.currentShip = "Looking for a Rig";
  //   }
  // }
  engageWarpDrive(){
    if (this.position === "Pilot" && this.currentShip !=="Looking for a Rig") {
      return this.currentShip.warpDrive = 'engaged!';
    }else {
      return 'had no effect'
    }
  }
  setsInvisibility(){
    if (this.position === "Defender" && this.currentShip !=="Looking for a Rig") {
      return this.currentShip.cloaked = true;
    }else {
      return 'had no effect'
    }
  }
  chargePhasers(){
    if (this.position === "Gunner" && this.currentShip !=="Looking for a Rig") {
      return this.currentShip.phasersCharge = 'charged!'
    }else {
      return 'had no effect'
    }
  }

}
// tristan = new CrewMember('Pilot')
// jon = new CrewMember('Defender')
// katie = new CrewMember('Gunner')
