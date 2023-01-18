import Race from './Race';

class Elf extends Race {
  static instances = 0;
    
  constructor(name: string, dexterity: number, public maxLifePoints = 99) {
    super(name, dexterity);
    Elf.instances += 1;
  }
  
  static createdRacesInstances():number {
    return this.instances;
  }
}
  
export default Elf;
