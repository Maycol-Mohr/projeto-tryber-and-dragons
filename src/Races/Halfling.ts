import Race from './Race';

class Halfling extends Race {
  static instances = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 60) {
    super(name, dexterity);
    Halfling.instances += 1;
  }
  
  static createdRacesInstances():number {
    return this.instances;
  }
}
  
export default Halfling;
