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
    a: "Las políticas pueden variar según la villa y la temporada. La recomendación es confirmarlas al momento de reservar para asegurar la estancia ideal.",
  },
  {
    q: "¿Incluye servicio de limpieza?",
    a: "Sí, se puede incluir limpieza programada o agregarla como extra durante el proceso de reserva.",
  },
  {
    q: "¿Puedo pagar en línea?",
    a: "El sitio está preparado para incorporar un motor de reservas externo que permita gestionar pagos, disponibilidad y confirmaciones de forma segura.",
  },
];
