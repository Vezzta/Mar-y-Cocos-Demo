# Operación de contenido

## Objetivo

Mantener el sitio consistente cuando entren nuevas fotografías, videos y ajustes editoriales, sin abrir cambios innecesarios en la UI.

## Reglas de trabajo

1. Los textos estructurales deben vivir en `src/content/*`.
2. Los assets editoriales globales deben registrarse en `src/content/site-media.ts`.
3. Los assets por villa deben mantenerse en `public/media/villas/<slug>/...`.
4. Los componentes visuales no deben recibir rutas hardcodeadas nuevas si el asset puede resolverse desde la capa de contenido.

## Flujo recomendado para nuevos assets

1. Recibir material final del cliente.
2. Renombrar archivos con la convención ya definida en `public/media/README.md`.
3. Colocar los archivos en `public/media/...`.
4. Cambiar `status` a `ready` en `src/content/site-media.ts` para assets globales.
5. Actualizar `src/content/villas.ts` si cambia media específica de una villa.
6. Validar localmente con `npm run build`.
7. Revisar visualmente hero, galería, ubicación y detalle de villa.

## Checklist editorial mínima

- Hero principal en alta resolución
- Imagen editorial de ubicación
- Una portada fuerte por villa
- Galería horizontal y vertical por villa
- Un clip de video corto para home o villa protagonista
- Alt text claro para cada bloque importante

## Qué no hacer

- No subir archivos con nombres improvisados.
- No reemplazar imágenes desde el componente si existe una capa de contenido.
- No mezclar assets finales con placeholders sin marcar el estado.
