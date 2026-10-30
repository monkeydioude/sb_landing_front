type Link = { label: string; href: string };
type Item = { title: string; text: string };

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
  features: { title: string; description: string; h1: string; sub: string };
  pricing: { title: string; description: string; h1: string; sub: string };
  demo: { title: string; description: string; h1: string; sub: string };
  contact: { title: string; description: string; h1: string; sub: string };
};
