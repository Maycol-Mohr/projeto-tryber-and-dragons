import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType: EnergyType;
  static instances = 0;
  
  constructor(name: string) { 
    super(name);
    this.energyType = 'mana';
    Necromancer.instances += 1;
  }

  public get energyTypee(): EnergyType {
    return this.energyType;
  }
  
  static createdArchetypeInstances():number {
    return this.instances;
  }
}
  
export default Necromancer;