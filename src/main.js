import './style.css';
import { summary } from './tasks.js';

const tasks = [
  { name: 'Configurar el pipeline desde TaskMate', done: true },
  { name: 'Pasar el CI (lint, pruebas y build)', done: true },
  { name: 'Desplegar a staging', done: true },
  { name: 'Promover a producción', done: true },
  { name: 'Probar el rollback desde TaskMate', done: false },
];

document.querySelector('#summary').textContent = summary(tasks);
const list = document.querySelector('#tasks');
for (const task of tasks) {
  const item = document.createElement('li');
  item.textContent = `${task.done ? '✅' : '⬜️'} ${task.name}`;
  list.append(item);
}
