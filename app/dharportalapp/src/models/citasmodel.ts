export class CitaModel {
    _id?: String = "";
    ID_Cita?: string = "";
    ID_Padre: string = "";
    ID_Maestro: string = "";
    ID_Estudiante: string = "";
    ID_Materia: string = "";
    Fecha_Hora: Date | string = ""; // Assuming Date or string can be used for Date and Time
    Descripcion: string = "";
}
