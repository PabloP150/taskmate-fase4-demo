# taskmate-fase4-demo

Sitio de ejemplo (Vite) para probar la **Fase 4 de TaskMate: CI/CD sin salir de la aplicación**.

Desde TaskMate (GitHub → CI/CD) se configura el pipeline de este repositorio: lint, pruebas, build y
deploy a GitHub Pages (staging en `/staging/`, producción en la raíz del sitio).

```bash
npm ci
npm run lint
npm test
npm run build
```
