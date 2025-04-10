import { Organism } from "./ModelosOrganismo"; 


export class Plant extends Organism {
    interactWithEnvironment(): void {
       console.log(`${this.name} está absorbiendo nutrientes.`);
    }
 }