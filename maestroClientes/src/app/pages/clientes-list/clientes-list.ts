import { Component } from '@angular/core';

// Define cómo es un cliente (los datos que tiene)
interface Cliente {
  nombre: string;
  estado: 'Active' | 'Inactive';
  proyectos: number;
  usuarios: number;
  actualizacion: string;
  color: string; // color del cuadrito con la inicial
}

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})
export class ClientesList {
  // Datos quemados (inventados). Más adelante vendrán más clientes
  clientes: Cliente[] = [
    { nombre: 'Cyberdyne Systems', estado: 'Active', proyectos: 24, usuarios: 150, actualizacion: '2 days ago', color: 'azul' },
    { nombre: 'Wayne Enterprises', estado: 'Active', proyectos: 15, usuarios: 98, actualizacion: '5 days ago', color: 'oscuro' },
    { nombre: 'Acme Corporation', estado: 'Inactive', proyectos: 8, usuarios: 42, actualizacion: '1 month ago', color: 'gris' },
    { nombre: 'Stark Industries', estado: 'Active', proyectos: 32, usuarios: 210, actualizacion: '1 day ago', color: 'oscuro' },
    { nombre: 'Ollivanders Wand Shop', estado: 'Active', proyectos: 3, usuarios: 5, actualizacion: '1 week ago', color: 'gris' },
  ];
}
