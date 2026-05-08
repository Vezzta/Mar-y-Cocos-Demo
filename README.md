# Mar & Cocos — Demo interactivo

Demo conceptual de homepage para **Mar & Cocos Hotel/Villas**, construido con:

- Next.js
- TypeScript
- Tailwind CSS
- React Client Components

## Requisitos

- Node.js 20 o superior recomendado
- npm

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Después abre:

```text
http://localhost:3000
```

## Qué incluye el demo

- Homepage responsive
- Navegación por secciones
- Menú móvil
- Tarjetas clickeables de villas
- Modal de detalle de villa
- Flujo de reserva en 3 pasos
- Galería interactiva
- FAQ tipo acordeón
- Footer con contacto/newsletter

## Notas importantes

Este proyecto es un demo visual/interactivo.  
Las reservas, pagos y disponibilidad todavía no están conectados a un PMS real.

La idea recomendada para producción es conectar el botón/flujo de reserva con un PMS o booking engine externo, por ejemplo Cloudbeds, Little Hotelier, Amenitiz, Guesty, VikBooking, MotoPress u otro sistema elegido por el cliente.

## Estructura principal

```text
src/app/page.tsx      Página principal interactiva
src/app/layout.tsx    Layout global
src/app/globals.css   Tailwind y estilos base
```

## Publicar en GitHub Pages

Este ZIP ya incluye configuración para exportar el sitio como archivos estáticos y publicarlo con GitHub Actions.

### Pasos

1. Crea un repositorio en GitHub.
2. Sube este proyecto al repositorio.
3. En GitHub, ve a **Settings > Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Haz push a la rama `main`.
6. Espera a que termine el workflow **Deploy Next.js static site to GitHub Pages**.

El sitio se generará en la carpeta `out` durante el build y GitHub Pages publicará ese resultado.

### Comandos útiles

```bash
npm install
npm run build
```

Para probar local:

```bash
npm run dev
```


## Solución a errores de instalación

Si venías de una versión anterior del ZIP o npm te marca conflictos de dependencias, limpia la instalación:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Para generar el build estático:

```bash
npm run build
```

Esta versión usa dependencias fijas para evitar conflictos con `latest`:

- Next.js 14.2.15
- React 18.3.1
- Tailwind CSS 3.4.15
- PostCSS 8.4.49
- Autoprefixer 10.4.20

