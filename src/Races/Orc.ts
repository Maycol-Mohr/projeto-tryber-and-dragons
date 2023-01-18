import Race from './Race';

class Orc extends Race {
  static instances = 0;
  
  constructor(name: string, dexterity: number, public maxLifePoints = 74) {
    super(name, dexterity);
    Orc.instances += 1;
  }
  
  static createdRacesInstances():number {
    return this.instances;
  }
}
  
export default Orc;
