# Arquitectura propuesta · Mar & Cocos

## Contexto

Con base en el análisis entregado en `Cotización Mar y Cocos`, el proyecto arranca en **Opción A**:

- sitio de captación;
- mejor imagen digital;
- contacto por WhatsApp / formulario;
- sin PMS ni operación transaccional todavía.

Sin embargo, el propio análisis deja claro que más adelante querrán migrar a **Opción B**:

- sitio público propio;
- disponibilidad y reservas conectadas;
- booking engine / PMS de terceros;
- menor riesgo operativo que un sistema propio.

La decisión técnica correcta es **desarrollar hoy la experiencia de Option A, pero con límites y contratos internos pensados para escalar a B sin reescribir el sitio**.

---

## Principios

1. **Separar marketing de reservas**
   El sitio público no debe depender estructuralmente de un proveedor de reservas específico.

2. **Integración por frontera**
   Cualquier PMS / booking engine debe entrar por una capa de integración aislada.

3. **Contenido tipado**
   Villas, experiencias, navegación y copy deben vivir en estructuras tipadas y centralizadas.

4. **UI desacoplada del proveedor**
   Los componentes visuales no deben saber si hoy captan leads o mañana consultan disponibilidad real.

5. **Evolución por reemplazo, no por parche**
   La migración de A hacia B debe ser principalmente:
   - cambiar configuración;
   - implementar adaptador;
   - conectar CTAs;
   - extender analítica y validaciones.

---

## Estado actual recomendado

### Opción A activa

Hoy el sitio debe operar como:

- experiencia de marca premium;
- catálogo de villas;
- páginas de detalle;
- galería y experiencias;
- flujo de solicitud / intención de reserva;
- CTA a WhatsApp o formulario;
- sin inventario real ni confirmación transaccional.

### Preparación para Opción B

Desde ahora conviene dejar:

- una carpeta `features/booking`;
- tipos de proveedor;
- configuración central del modo de reserva;
- proveedores placeholder;
- textos de CTA centralizados.

---

## Estructura recomendada

```text
src/
  app/
    page.tsx
    villas/
    experiencias/
    galeria/
    ubicacion/

  components/
    site-chrome.tsx
    villa-card.tsx
    media-ready.tsx

  features/
    booking/
      config.ts
      index.ts
      providers/
        types.ts
        lead-capture-provider.ts
        external-engine-provider.ts

  content/
    navigation.ts
    villas.ts
    experiences.ts
    gallery.ts
    faq.ts
    amenities.ts
    media-delivery.ts
```

---

## Capas

### 1. Presentación

Responsabilidad:

- layout;
- páginas;
- componentes visuales;
- microinteracciones;
- render de contenido.

No debe contener:

- lógica de proveedor;
- URLs hardcodeadas a PMS;
- reglas de disponibilidad reales.

### 2. Configuración de producto

Responsabilidad:

- definir el modo actual de reservas;
- exponer labels y comportamiento base;
- controlar si el sitio está en `lead_capture`, `external_engine` o futuro `native_pms`.
- seleccionar proveedor activo por entorno, sin editar componentes visuales.

### 3. Integración de reservas

Responsabilidad:

- encapsular al proveedor actual o futuro;
- definir capacidades;
- mapear textos y flujos;
- permitir migrar sin tocar la UI principal.

### 4. Contenido

Responsabilidad:

- villas;
- amenidades;
- experiencias;
- galería;
- navegación;
- textos base.

---

## Estrategia de evolución A → B

### Fase 1 · Hoy

- mantener sitio como captación;
- CTA principal: solicitud / consulta;
- panel de disponibilidad como experiencia de intención, no como disponibilidad real;
- mantener copy consistente con captación.

### Fase 2 · Preparación técnica

- elegir proveedor:
  - Little Hotelier;
  - Amenitiz;
  - Beds24;
- fijar `NEXT_PUBLIC_BOOKING_PROVIDER` según el modo activo;
- documentar:
  - tipo de integración;
  - link, widget, iframe o API;
  - restricciones de branding;
  - eventos de analítica.

### Fase 3 · Integración

Implementar un adaptador concreto:

- `external-engine-provider.ts`
- mapping de URLs o widgets;
- CTAs específicos;
- pruebas por página;
- fallback si el proveedor falla.

### Fase 4 · Operación

- tracking de funnel;
- medición por CTA;
- monitoreo de conversión;
- soporte de contenido operativo.

---

## Buenas prácticas recomendadas

1. **No mezclar contenido con comportamiento de negocio**
   `src/content/*` describe catálogo y contenido.
   `features/booking/*` describe el modo de reserva.

2. **No hardcodear nombres de proveedor en la UI**
   La UI debe consumir `activeBookingProvider`.

3. **Mantener contratos pequeños**
   El proveedor solo debe exponer lo que la UI necesita.

4. **Declarar capacidades**
   El proveedor debe describir si soporta disponibilidad real, reserva instantánea y prefill de datos.

5. **Evitar dependencias tempranas**
   No integrar SDKs de PMS antes de definir proveedor final.

6. **Preparar analítica desde la capa de CTA**
   Todos los botones críticos deben ser rastreables después.

7. **Usar rutas limpias y estables**
   Las páginas de villa deben permanecer estables aunque cambie el backend de reservas.

8. **Mantener archivos de media fuera del componente**
   Los assets deben ir en `public/media/...` o en CMS futuro, nunca embebidos en lógica.

---

## Recomendación de implementación futura

Cuando migren a Opción B:

1. No rehacer la home.
2. No rehacer páginas de villa.
3. Sustituir el proveedor activo.
4. Conectar CTAs a disponibilidad real.
5. Mantener el mismo lenguaje visual y la misma arquitectura de contenido.

---

## Checklist técnico para siguiente etapa

- [ ] Confirmar proveedor final de reservas
- [ ] Definir si integración será `link`, `widget`, `iframe` o `API`
- [ ] Agregar eventos de analítica para CTAs
- [ ] Sustituir assets de referencia por fotos y video reales
- [ ] Formalizar contacto / WhatsApp / formulario final de Opción A
- [ ] Implementar adaptador real para Opción B cuando sea aprobado
