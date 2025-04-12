export class Resource {
    private nombre: string;
    private cantidad: number;

    constructor(nombre: string, cantidad: number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    usarRecurso(): void {
        if (this.cantidad > 0) {
            this.cantidad--;
            console.log(`Usando recurso: ${this.nombre}. Quedan ${this.cantidad} unidades.`);
        } else {
            console.log(`Recurso ${this.nombre} agotado.`);
        }
    }
}
