import { ValidationException } from "../exceptions/excepcionesPersonalizada";

export function validateInput(value: number): void {
   if (value <= 0) {
      throw new ValidationException("El valor debe ser mayor a 0");
   }
}
