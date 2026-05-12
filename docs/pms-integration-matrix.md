# PMS Integration Matrix

## Objetivo

Comparar rápidamente las rutas de integración posibles para cuando Mar & Cocos pase de un sitio de captación a una experiencia conectada con reservas reales.

## Criterios

- esfuerzo técnico
- control visual
- velocidad de salida
- mantenimiento
- riesgo operativo

## Opciones de integración

| Modelo | Descripción | Ventajas | Riesgos | Recomendación |
|---|---|---|---|---|
| `Link-out` | El CTA lleva al booking engine externo en una nueva página o pestaña. | Más rápido, menos mantenimiento, menor riesgo. | Menor control visual y posible caída en conversión por salida del sitio. | Mejor punto de partida para una primera versión conectada. |
| `Iframe / widget` | El motor se embebe dentro del sitio o una página dedicada. | Más continuidad visual y experiencia más contenida. | Limitaciones de branding, tracking parcial, problemas responsive según proveedor. | Útil si el proveedor tiene buen widget y el branding embebido es aceptable. |
| `API / integración profunda` | El frontend consulta disponibilidad y dispara reserva sobre APIs del proveedor. | Máximo control de UX y analítica. | Mayor complejidad, testing más delicado, dependencia fuerte de contrato/API. | Solo vale la pena si el proveedor lo soporta bien y el negocio lo justifica. |

## Cómo evaluar al proveedor final

1. ¿Permite deep links por villa, fechas y huéspedes?
2. ¿Ofrece widget o iframe mantenible?
3. ¿Existe API pública y estable?
4. ¿Qué tanto branding permite conservar?
5. ¿Cómo expone disponibilidad, tarifas y restricciones?
6. ¿Qué eventos pueden medirse para analítica?

## Recomendación técnica por etapa

### Etapa 1

Usar `link-out` con prefill si el proveedor lo soporta.

### Etapa 2

Evaluar `widget / iframe` solo si el proveedor no rompe demasiado la experiencia visual.

### Etapa 3

Ir a `API` únicamente si:

- hay retorno comercial claro,
- el proveedor tiene contrato técnico estable,
- y el equipo puede sostener QA y mantenimiento.

## Impacto en este proyecto

La arquitectura actual ya ayuda porque:

- los CTAs viven detrás de `features/booking`
- el proveedor activo se selecciona por entorno
- la UI no depende directamente de un PMS específico
- la analítica ya puede instrumentarse desde los botones clave
