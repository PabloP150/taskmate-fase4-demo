// Lógica pura (sin DOM) para que las pruebas la cubran.

/** Porcentaje (0–100, entero) de tareas completadas. */
export function progress(tasks) {
  if (!Array.isArray(tasks) || tasks.length === 0) return 0;
  const done = tasks.filter((task) => task.done).length;
  return Math.round((done / tasks.length) * 100);
}

/** Texto del resumen que muestra la página. */
export function summary(tasks) {
  const total = Array.isArray(tasks) ? tasks.length : 0;
  if (total === 0) return 'No hay tareas.';
  const done = tasks.filter((task) => task.done).length;
  return `${done} de ${total} tareas completadas (${progress(tasks)} %)`;
}
