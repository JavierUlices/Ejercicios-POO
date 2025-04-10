export type EventType = 'Conferencia' | 'Concierto' | 'Boda';

export interface Participant {
  id: number;
  nombre: string;
  email: string;
  asiento?: number;
}

export interface ServiceProvider {
  id: number;
  nombre: string;
  servicio: string;
  costo: number;
}

export interface Activity {
  id: number;
  nombre: string;
  descripcion: string;
  horario: string;
}

export interface Event {
  id: number;
  tipo: EventType;
  nombre: string;
  fecha: Date;
  ubicacion: string;
  capacidad: number;
  presupuesto: number;
  participantes: Participant[];
  proveedores: ServiceProvider[];
  actividades: Activity[];
  recursos: string[];
}