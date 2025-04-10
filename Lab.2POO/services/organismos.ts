import { Organism } from "../Models/ModelosOrganismo";

export class EcosystemService {
   private organisms: Organism[] = [];

   addOrganism(organism: Organism): void {
      this.organisms.push(organism);
   }

   simulateCycle(): void {
      console.log("Simulando un ciclo de vida...");
      this.organisms.forEach((org) => org.interactWithEnvironment());
   }

   generateStatistics(): void {
      console.log("Estadísticas del ecosistema:");
      const report = this.organisms.map((org) => ({
         name: org.name,
         lifespan: org.lifespan,
         population: Math.floor(Math.random() * 100),
      }));
      console.table(report);
   }
}
