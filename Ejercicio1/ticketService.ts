export class TicketService {
    venderEntrada(evento: string, cantidad: number): void {
        console.log(`Vendiendo ${cantidad} entradas para el evento: ${evento}`);
    }

    asignarAsiento(evento: string, asiento: string): void {
        console.log(`Asignando asiento ${asiento} para el evento: ${evento}`);
    }
}
