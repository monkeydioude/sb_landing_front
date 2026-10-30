type Link = { label: string; href: string };
type Item = { title: string; text: string };

export type Plan = {
  name: string;
  tag: string;
  badge?: string; // ribbon above the card, e.g. "Most popular"
  price: { monthly: string; annual: string };
  unit: string;
  annualNote?: string; // shown under the price when billed annually
  description?: string;
  cta: string;
  featuresTitle: string;
  featuresLink?: string;
  features: string[];
  note: string;
  noteTag?: string;
};

export type Pricing = {
  title: string;
  description: string;
  badge: string;
  h1: string; // *asterisks* = gradient accent
  sub: string;
  billing: { label: string; monthly: string; annual: string; discount: string };
  plans: Plan[];
  assurances: { title: string; text: string }[];
  faq: { title: string; sub: string; items: { q: string; a: string }[] };
  final: { title: string; sub: string; cta: string; secondary: string };
};

type FCard = { tag: string; title: string; text: string; foot?: string };
type GroupHeader = { index: string; title: string; sub: string; phase: string };

export type Features = {
  title: string;
  description: string;
  badge: string;
  version: string;
  h1: string; // *asterisks* = gradient accent
  sub: string;
  chips: string[];
  stats: { value: string; label: string }[];
  sandbox: {
    title: string;
    subtitle: string;
    live: string;
    nameLabel: string;
    nameValue: string;
    budgetLabel: string;
    currencyValue: string;
    cap: string;
    horizonLabel: string;
    days: string;
    quarter: string;
    descLabel: string;
    descValue: string;
    recLabel: string;
    perDay: string;
    effLabel: string;
    effValue: string;
    cta: string;
  };
  architecture: { tag: string; title: string; sub: string };
  construction: GroupHeader & {
    campaign: FCard & { path: string[] };
    entry: FCard;
    vendor: FCard;
    categories: FCard;
    roles: FCard;
  };
  operations: GroupHeader & {
    ads: FCard & { platforms: string[]; connected: string };
    commitments: FCard & { committed: string; value: string };
    expenses: FCard;
    transfer: FCard;
    changelog: FCard;
    alerts: { title: string; text: string; chips: string[] };
  };
  reporting: GroupHeader & {
    dashboards: FCard & { pacing: string; value: string };
    sheets: FCard;
    roi: FCard;
    summaries: FCard & { insightLabel: string; insight: string };
    mcp: FCard & { prompt: string; response: string; chips: string[] };
  };
  cta: {
    tag: string;
    title: string;
    sub: string;
    primary: string;
    secondary: string;
    perks: string[];
  };
};

export type Contact = {
  title: string;
  description: string;
  badge: string;
  h1: string; // *asterisks* = gradient accent
  sub: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  form: {
    title: string;
    name: string;
    email: string;
    company: string;
    role: string;
    teamSize: string;
    adSpend: string;
    platforms: string;
    message: string;
    messagePlaceholder: string;
    select: string;
    teamSizes: string[];
    adSpends: string[];
    platformOptions: string[];
    consent: { before: string; link: string; after: string };
    submit: string;
    sending: string;
    required: string;
    success: { title: string; text: string; again: string };
    error: string;
  };
};

export type Home = {
  title: string;
  description: string;
  badge: string;
  h1: string; // text between *asterisks* is rendered as the gradient accent
  sub: string;
  cta: string;
  hero: { before: string; after: string; runway: string; runwayValue: string; committed: string };
  dashboard: {
    title: string;
    live: string;
    tabs: string[];
    stats: { label: string; value: string; note: string }[];
    chart: string;
    filters: string[];
  };
  trust: { label: string; rating: string; logos: string[] };
  free: { title: string; items: Item[]; question: string };
  gaps: {
    title: string;
    cards: (Item & { cta: string })[];
    mock: {
      budget: string;
      rows: { label: string; value: string }[];
      form: {
        title: string;
        vendor: string;
        vendorValue: string;
        amount: string;
        currency: string;
        currencyValue: string;
        budget: string;
        budgetPlaceholder: string;
        category: string;
        categoryPlaceholder: string;
      };
    };
  };
  integrations: { title: string; items: string[] };
  quote: { text: string; author: string; role: string };
  final: { title: string; cta: string };
};

export type Content = {
  nav: {
    features: string;
    pricing: string;
    demo: string;
    contact: string;
    login: string;
    cta: string;
    theme: string;
    menu: string;
  };
  footer: { copyright: string; legal: string; privacy: string };
  home: Home;
  features: Features;
  pricing: Pricing;
  demo: { title: string; description: string; h1: string; sub: string };
  contact: Contact;
};
