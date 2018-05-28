import { UsuarioQuiniela } from '../models/UsuarioQuiniela';

export interface Quiniela {
    nombre: string;
    id: string;
    usuarios: UsuarioQuiniela[];
}