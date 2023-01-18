import Race from './Race';

class Dwarf extends Race {
  static instances = 0;
  
  constructor(name: string, dexterity: number, public maxLifePoints = 80) { 
    super(name, dexterity);
    Dwarf.instances += 1;
  }
  
  static createdRacesInstances():number {
    return this.instances;
  }
}
  
export default Dwarf;
