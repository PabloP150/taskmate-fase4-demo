import { describe, expect, test } from 'vitest';
import { progress, summary } from '../src/tasks.js';

describe('progress', () => {
  test('porcentaje de tareas completadas', () => {
    expect(progress([{ done: true }, { done: false }, { done: true }, { done: true }])).toBe(80);
  });

  test('sin tareas es 0', () => {
    expect(progress([])).toBe(0);
    expect(progress(undefined)).toBe(0);
  });
});

describe('summary', () => {
  test('describe el avance', () => {
    expect(summary([{ done: true }, { done: false }])).toBe('1 de 2 tareas completadas (50 %)');
    expect(summary([])).toBe('No hay tareas.');
  });
});
