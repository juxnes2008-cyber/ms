import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  // Opciones del menú. Solo Clientes tiene ruta; las demás son solo visuales (ruta: null)
  menu = [
    { nombre: 'Dashboard', icono: 'dashboard', ruta: null },
    { nombre: 'Clientes', icono: 'person', ruta: '/clientes' },
    { nombre: 'Proyectos', icono: 'folder', ruta: null },
    { nombre: 'Equipos', icono: 'groups', ruta: null },
    { nombre: 'Servicios', icono: 'home_repair_service', ruta: null },
    { nombre: 'Usuarios y Roles', icono: 'manage_accounts', ruta: null },
    { nombre: 'Infraestructura / MCP', icono: 'dns', ruta: null },
    { nombre: 'IA & PROMs', icono: 'smart_toy', ruta: null },
    { nombre: 'Auditoría', icono: 'public', ruta: null },
    { nombre: 'Configuración', icono: 'settings', ruta: null },
  ];
}
