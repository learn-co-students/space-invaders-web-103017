class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  // currentShip(){
  //   if (this.ship === 0){
  //     return "Looking for a Rig"
  //   }
  //   else {
  //     return this.ship
  //   }
  // }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Pilot"){
      this.currentShip.warpDrive = "engaged!"
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Defender"){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig" ) {
      return "had no effect"
    } else if (this.position === "Gunner"){
      this.currentShip.phasersCharge = "charged!"
    }
  }
}

class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
      let myShip = this

      this.crew.forEach(function (member) {member.currentShip = myShip})




      // this.crew.forEach(function (member) {member.currentShip = this
      // })
    }


  }
}
