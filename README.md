# Mar & Cocos

Sitio conceptual para **Mar & Cocos Hotel/Villas**, construido con `Next.js`, `TypeScript` y `Tailwind CSS`, preparado como export estático para GitHub Pages y pensado para evolucionar de una experiencia de captación (`Opción A`) a una integración futura con `PMS / booking engine` (`Opción B`).

## Stack

- `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `App Router`
- export estático con `output: "export"`

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
```

## Configuración

El sitio ya puede seleccionar el proveedor de reservas activo por variable de entorno:

```bash
NEXT_PUBLIC_BOOKING_PROVIDER=lead-capture
```

Valores soportados hoy:

- `lead-capture`
- `external-engine-placeholder`

Toma como referencia [.env.example](/Users/eltonsenftleben/VIsual%20Studio%20Code%20%20/mar-cocos-next-demo/.env.example).

Analítica opcional:

```bash
NEXT_PUBLIC_ANALYTICS_DEBUG=false
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

### Flujo local recomendado

Desarrollo:

```bash
npm run dev
```

Vista previa del sitio estático exportado:

```bash
npm run preview
```

`npm run start` también sirve el contenido estático de `out/` y ya no usa `next start`.

## Arquitectura actual

```text
src/
  app/
    page.tsx
    villas/
    experiencias/
    galeria/
    ubicacion/

  components/
    home/
    media-ready.tsx
    site-chrome.tsx
    villa-card.tsx

  content/
    amenities.ts
    experiences.ts
    faq.ts
    gallery.ts
    media-delivery.ts
    navigation.ts
    villas.ts

  features/
    booking/
      config.ts
      index.ts
      providers/
```

## Principios de implementación

- Las URLs públicas pueden estar en español; las estructuras internas del código deben mantenerse consistentes y predecibles.
- El contenido vive separado por dominio dentro de `src/content`.
- La UI no debe depender directamente de un PMS específico.
- La evolución de `Opción A` a `Opción B` debe ocurrir por adaptación de la capa `features/booking`, no rehaciendo páginas.
- Los CTAs de reserva ya exponen metadatos `data-booking-*` para facilitar analítica futura.
- Existe una capa ligera de tracking en `src/features/analytics` para instrumentar eventos sin acoplar la UI a un proveedor.
- Los assets editoriales globales del sitio viven centralizados en `src/content/site-media.ts`.

## Estado funcional

Incluye:

- Home editorial multipágina
- Páginas de villas
- Página individual por villa
- Experiencias, galería y ubicación
- Flujo visual de intención de reserva
- Preparación para media real en `public/media`

No incluye todavía:

- disponibilidad real
- pagos reales
- inventario o tarifas conectadas
- integración activa con PMS/booking engine

## Assets y reemplazo de media

Mientras no entren fotos y video reales, el sitio usa imágenes de referencia externas. Cuando llegue material definitivo:

1. agregar archivos a `public/media/...`
2. actualizar rutas en `src/content/villas.ts` y `src/content/media-delivery.ts`
3. validar peso y formato de imágenes/video
4. volver a exportar con `npm run build`

## Publicación en GitHub Pages

El proyecto ya está configurado para publicar con GitHub Actions.

1. Crear el repositorio.
2. Activar `Settings > Pages > Source: GitHub Actions`.
3. Hacer push a `main`.
4. Esperar el workflow `Deploy Next.js static site to GitHub Pages`.

## Documentación complementaria

- Arquitectura y transición A → B:
  [docs/architecture-option-a-to-b.md](/Users/eltonsenftleben/VIsual%20Studio%20Code%20%20/mar-cocos-next-demo/docs/architecture-option-a-to-b.md)
- Guía de media:
  [public/media/README.md](/Users/eltonsenftleben/VIsual%20Studio%20Code%20%20/mar-cocos-next-demo/public/media/README.md)
