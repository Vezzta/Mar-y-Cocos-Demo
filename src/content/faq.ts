export type FaqItem = {
  q: string;
  a: string;
};

export const faqs: FaqItem[] = [
  {
    q: "¿Cuál es el horario de check-in y check-out?",
    a: "El check-in sugerido es a partir de las 3:00 pm y el check-out antes de las 12:00 pm. Se puede solicitar llegada temprana según disponibilidad.",
  },
  {
    q: "¿Se aceptan niños o mascotas?",
    a: "El sitio puede mostrar políticas por villa. Para este demo se plantea una sección clara de reglas antes de reservar.",
  },
  {
    q: "¿Incluye servicio de limpieza?",
    a: "Sí, se puede incluir limpieza programada o agregarla como extra durante el proceso de reserva.",
  },
  {
    q: "¿Puedo pagar en línea?",
    a: "La intención es conectar el frontend con un PMS o booking engine tercero para manejar pagos, disponibilidad y confirmaciones.",
  },
];
