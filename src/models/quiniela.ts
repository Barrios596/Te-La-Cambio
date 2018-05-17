import { UsuarioQuiniela } from '../models/UsuarioQuiniela';

export interface Quiniela {
    nombre: string;
    usuarios: UsuarioQuiniela[];
}