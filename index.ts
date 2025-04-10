import { Luz } from './dispositivos/Luz';
import { Termostato } from './dispositivos/Termostato';
import { Cerradura } from './dispositivos/Cerradura';
import { Camara } from './dispositivos/Camara';
import { Rutina } from './rutinas/Rutinas';
import { Escenario } from './escenarios/Escenario';
import { Monitoreo } from './monitoreo/Monitoreo';
import { validarDispositivo } from './validaciones/Validaciones';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar datos al usuario
function solicitarDatos(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

(async () => {
    // Solicitar ubicaciones para los dispositivos
    const ubicacionLuz = await solicitarDatos('Ingrese la ubicación de la luz: ');
    const ubicacionTermostato = await solicitarDatos('Ingrese la ubicación del termostato: ');
    const ubicacionCerradura = await solicitarDatos('Ingrese la ubicación de la cerradura: ');
    const ubicacionCamara = await solicitarDatos('Ingrese la ubicación de la cámara: ');

    const luzSala = new Luz(ubicacionLuz);
    const termostatoHabitacion = new Termostato(ubicacionTermostato);
    const cerraduraPuertaPrincipal = new Cerradura(ubicacionCerradura);
    const camaraExterior = new Camara(ubicacionCamara);

    // Configurar una rutina
    const horarioRutina = new Date();
    horarioRutina.setHours(7, 0, 0); // 7 AM
    const rutinaManana = new Rutina("Rutina de la Mañana", horarioRutina);
    rutinaManana.agregarDispositivo(luzSala);
    rutinaManana.agregarDispositivo(termostatoHabitacion);

    // Configurar un escenario
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

        // Ejecutar rutina
        rutinaManana.ejecutar();

        // Aplicar escenario
        escenarioNocturno.aplicar();

        // Monitorear en tiempo real
        monitoreo.monitorearEnTiempoReal();

        // Generar informe de consumo energético
        monitoreo.generarInforme();
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
})();
