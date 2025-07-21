export const letterPaths = [
  {
    id: "H",
    path: "M10 10 L10 140 M70 10 L70 140 M10 75 L70 75", // Deux verticales + barre horizontale centrale
    fillDelay: 0.2
  },
  {
    id: "E",
    path: "M100 10 L100 140 L160 140 M100 75 L150 75 M100 10 L160 10", // Verticale + 3 barres horizontales
    fillDelay: 0.4
  },
  {
    id: "L1",
    path: "M190 10 L190 140 L240 140", // Verticale + barre basse
    fillDelay: 0.6
  },
  {
    id: "L2",
    path: "M270 10 L270 140 L320 140", // Même chose pour le second L
    fillDelay: 0.8
  },
  {
    id: "O",
    path: "M350 10 L400 10 L400 140 L350 140 Z", // Rectangle pour O simple
    fillDelay: 1.0
  }
];
