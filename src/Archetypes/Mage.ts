import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energyType: EnergyType; 
  static instances = 0;
  
  constructor(name: string) { 
    super(name);
    this.energyType = 'mana';
    Mage.instances += 1;
  }

  public get energyTypee(): EnergyType {
    return this.energyType;
  }
  
  static createdArchetypeInstances():number {
    return this.instances;
  }
}
  
export default Mage;