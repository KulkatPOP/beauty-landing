# Beauty / UGC Landing

Landing independiente orientada a colaboraciones para una creadora Beauty y UGC, construida con Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

Visita `http://localhost:3001`. Personaliza contenido, imágenes y enlaces de demostración en `src/data/beauty.ts`.

## Producción

```bash
npm run build
npm start
```

## Netlify

Importa este repositorio como un sitio independiente. `netlify.toml` configura el build y `public/__forms.html` permite que Netlify Forms detecte el formulario con `@netlify/plugin-nextjs` v5. Activa la detección de formularios en Netlify y realiza un deploy de producción.

Netlify proporciona `URL` durante el build. En otro proveedor configura `NEXT_PUBLIC_SITE_URL` con el dominio público para generar canonical, robots y sitemap correctos. No uses el valor de ejemplo en producción.

## Verificación

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Consulta `docs/` para seguridad, pruebas, trazabilidad e información legal pendiente.
