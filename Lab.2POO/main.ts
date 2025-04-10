import { Animal } from "./Models/Animal";
import { Plant } from "./Models/plant";
import { EcosystemService } from "./services/organismos";
import { validateInput } from "./utils/validacion";

class EcosystemCLI {
    private ecosystem: EcosystemService;
 
    constructor() {
       this.ecosystem = new EcosystemService();
    }
 
    public async start(): Promise<void> {
       console.log("Bienvenido al Simulador de Ecosistema");
       let continueAdding = true;
 
       while (continueAdding) {
          const name = await this.ask("Nombre del organismo: ");
          const lifespan = parseFloat(await this.ask("Esperanza de vida (en años): "));
          const reproductionRate = parseFloat(await this.ask("Tasa de reproducción: "));
          const foodNeeds = parseFloat(await this.ask("Necesidades alimenticias: "));
          const type = await this.ask("¿Es un Animal o una Planta? (escribe 'animal' o 'planta'): ");
 
          try {
             validateInput(lifespan);
             validateInput(reproductionRate);
             validateInput(foodNeeds);
 
             let organism;
             if (type === "animal") {
                organism = new Animal(name, lifespan, reproductionRate, foodNeeds);
             } else if (type === "planta") {
                organism = new Plant(name, lifespan, reproductionRate, foodNeeds);
             } else {
                console.log("Tipo inválido. Usa 'animal' o 'planta'.");
                continue;
             }
 
             this.ecosystem.addOrganism(organism);
             console.log(`Organismo agregado: ${name}`);
          } catch (error) {
             console.error("Error:", (error as Error).message);
          }
 
          const addMore = await this.ask("¿Deseas agregar otro organismo? (sí/no): ");
          continueAdding = addMore === "sí";
       }
 
       console.log("Iniciando simulación...");
       this.ecosystem.simulateCycle();
       this.ecosystem.generateStatistics();
    }
 
    private ask(question: string): Promise<string> {
       return new Promise((resolve) => {
          process.stdout.write(question);
          process.stdin.once("data", (data) => resolve(data.toString().trim()));
       });
    }
 }
 
 const cli = new EcosystemCLI();
 cli.start();