import { Luz } from '../Ejercio3.POO/Luz';
import { Termostato } from '../Ejercio3.POO/Termostato';
import { Cerradura } from '../Ejercio3.POO/Cerradura';
import { Camara } from '../Ejercio3.POO/Camara'
import { Rutina } from '../Ejercio3.POO/Rutinas';
import { Escenario } from '../escenario/Escenario'
import { Monitoreo } from '../Ejercio3.POO/Monitoreo';
import { validarDispositivo } from '../Ejercio3.POO/Validaciones'
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// funcones para mostrar los datos del usuario
function solicitarDatos(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

(async () => {
    const ubicacionLuz = await solicitarDatos('Ingrese la ubicación de la luz: ');
    const ubicacionTermostato = await solicitarDatos('Ingrese la ubicación del termostato: ');
    const ubicacionCerradura = await solicitarDatos('Ingrese la ubicación de la cerradura: ');
    const ubicacionCamara = await solicitarDatos('Ingrese la ubicación de la cámara: ');

    const luzSala = new Luz(ubicacionLuz);
    const termostatoHabitacion = new Termostato(ubicacionTermostato);
    const cerraduraPuertaPrincipal = new Cerradura(ubicacionCerradura);
    const camaraExterior = new Camara(ubicacionCamara);
    
    const horarioRutina = new Date();
    horarioRutina.setHours(7, 0, 0);  
    const rutinaManana = new Rutina("Rutina de la Mañana", horarioRutina);
    rutinaManana.agregarDispositivo(luzSala);
    rutinaManana.agregarDispositivo(termostatoHabitacion);

    const escenarioNocturno = new Escenario("Modo Nocturno");
    escenarioNocturno.agregarDispositivo(luzSala, "apagar");
    escenarioNocturno.agregarDispositivo(termostatoHabitacion, "apagar");
    escenarioNocturno.agregarDispositivo(cerraduraPuertaPrincipal, "encender");

    const monitoreo = new Monitoreo();
    monitoreo.agregarDispositivo(luzSala);
    monitoreo.agregarDispositivo(termostatoHabitacion);
    monitoreo.agregarDispositivo(cerraduraPuertaPrincipal);
    monitoreo.agregarDispositivo(camaraExterior);

    try {
        validarDispositivo(luzSala);

        rutinaManana.ejecutar();

        escenarioNocturno.aplicar();

        monitoreo.monitorearEnTiempoReal();

        monitoreo.generarInforme();
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
})();
