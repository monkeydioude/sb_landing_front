// Invented demo figures for the home-page dashboard (no customer data). One source of truth: the chart,
// the category table and the stat cards (spent 420,000 / committed 310,000 / budget 1,190,000) all add up.
export const MONTHS_COUNT = 12;
/** Months with actual spend (Jan-Jun); the later ones are committed. */
export const ACTUAL_MONTHS = 6;

/** Monthly budget, EUR; sums to 1,190,000. */
export const BUDGET: number[] = [
  76900, 76200, 73800, 77500, 76700, 74100, 125200, 106400, 127700, 131400, 137700, 106400,
];

/** Spend per month and region: [North America, Europe, LATAM, Unplanned]. Jan-Jun actual, Jul-Dec committed. */
export const SPEND: number[][] = [
  [28397, 31023, 6905, 934],
  [30715, 33829, 5958, 987],
  [34033, 35935, 7011, 1040],
  [28351, 31041, 6064, 1093],
  [30309, 34147, 6117, 1146],
  [27943, 30253, 5870, 899],
  [21987, 25061, 5074, 0],
  [17040, 20167, 3127, 0],
  [48093, 54273, 10180, 0],
  [20146, 22979, 4833, 0],
  [15199, 16685, 3886, 0],
  [8540, 10791, 1939, 0],
];

export type Cell = { budget: number; actual: number };
/** Category table, Jan-Jun. North America's children sum to its parent row. */
export const NA_CHILDREN: Record<'paid' | 'content' | 'events', Cell[]> = {
  paid: [
    { budget: 16300, actual: 15619 },
    { budget: 16400, actual: 16893 },
    { budget: 17200, actual: 18718 },
    { budget: 16800, actual: 15593 },
    { budget: 17000, actual: 16669 },
    { budget: 16200, actual: 15369 },
  ],
  content: [
    { budget: 9000, actual: 7951 },
    { budget: 8000, actual: 8600 },
    { budget: 8300, actual: 9529 },
    { budget: 8200, actual: 7938 },
    { budget: 8200, actual: 8487 },
    { budget: 8700, actual: 7824 },
  ],
  events: [
    { budget: 7800, actual: 4827 },
    { budget: 7500, actual: 5222 },
    { budget: 6800, actual: 5786 },
    { budget: 9600, actual: 4820 },
    { budget: 7000, actual: 5153 },
    { budget: 7200, actual: 4750 },
  ],
};
export const REGIONS: Record<'eu' | 'latam' | 'unplanned', Cell[]> = {
  eu: [
    { budget: 35900, actual: 31023 },
    { budget: 36400, actual: 33829 },
    { budget: 35700, actual: 35935 },
    { budget: 36300, actual: 31041 },
    { budget: 36900, actual: 34147 },
    { budget: 35800, actual: 30253 },
  ],
  latam: [
    { budget: 7900, actual: 6905 },
    { budget: 7900, actual: 5958 },
    { budget: 5800, actual: 7011 },
    { budget: 6600, actual: 6064 },
    { budget: 7600, actual: 6117 },
    { budget: 6200, actual: 5870 },
  ],
  unplanned: [
    { budget: 0, actual: 934 },
    { budget: 0, actual: 987 },
    { budget: 0, actual: 1040 },
    { budget: 0, actual: 1093 },
    { budget: 0, actual: 1146 },
    { budget: 0, actual: 899 },
  ],
};
