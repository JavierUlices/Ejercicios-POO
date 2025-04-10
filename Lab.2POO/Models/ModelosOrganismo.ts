export abstract class Organism {
    constructor(
       public name: string,
       public lifespan: number,
       public reproductionRate: number,
       public foodNeeds: number
    ) {}
 
    abstract interactWithEnvironment(): void;
 }
 