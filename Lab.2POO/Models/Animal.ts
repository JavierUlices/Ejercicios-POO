import { Organism } from "./ModelosOrganismo";

export class Animal extends Organism {
    interactWithEnvironment(): void {
       console.log(`${this.name} está cazando.`);
    }
}