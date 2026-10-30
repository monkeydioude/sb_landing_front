import type { Content } from './types';

export const fr: Content = {
  nav: {
    features: 'Fonctionnalités',
    pricing: 'Prix',
    demo: 'Voir la démo',
    contact: 'Nous contacter',
    login: 'Connexion',
    cta: 'Essayer gratuitement',
    theme: 'Basculer le mode sombre',
    menu: 'Ouvrir le menu',
  },
  footer: { copyright: '© Spendbaker', legal: 'CGV', privacy: 'Politique de confidentialité' },
  home: {
    title: 'Logiciel de Budget Marketing | Solution Spendbaker',
    description:
      'Construisez, planifiez et suivez votre budget marketing en temps réel. Ingestion automatique des dépenses et prévisions par IA.',
    badge: 'LOGICIEL DE BUDGET MARKETING',
    h1: 'Construisez et suivez votre *budget marketing* en toute simplicité.',
    sub: 'Votre budget marketing mérite mieux qu’un tableur. Arrêtez de le gérer à la main : utilisez l’IA et prenez de meilleures décisions.',
    cta: 'Essayer gratuitement',
    hero: {
      before: 'Sans Spendbaker',
      after: 'Avec Spendbaker',
      runway: 'Reste à dépenser T2',
      runwayValue: '124 500 €',
      committed: '78 % engagé',
    },
    dashboard: {
      title: 'Budget Marketing 2026',
      live: 'En direct',
      tabs: ['Vue d’ensemble', 'Dépenses', 'Catégories'],
      stats: [
        { label: 'Budget total', value: '1 250 000 €', note: '100 % de l’allocation' },
        { label: 'Dépensé', value: '420 000 €', note: '33,6 % du budget' },
        { label: 'Engagé', value: '310 000 €', note: '24,8 % du budget' },
        { label: 'Restant', value: '520 000 €', note: '41,6 % disponible' },
      ],
      chart: 'Budget par pays',
      filters: ['Mois', 'Trimestre', 'Année', 'Filtrer par pays'],
    },
    trust: {
      label: 'Ils nous font confiance',
      rating: '4,7',
      logos: ['PAYFIT', 'INNOVATELAB', 'FUTUREWORKS', 'DATAFLOW', 'CLOUDSYNC'],
    },
    free: {
      title: 'Libérez les marketeurs *des tâches administratives* du budget.',
      question: 'Combien nous reste-t-il en search payant ce trimestre ?',
      items: [
        {
          title: 'Planification budgétaire',
          text: 'Définissez vos catégories de dépenses, attribuez les responsabilités et répartissez vos fonds trimestriels sans effort.',
        },
        {
          title: 'Suivi des dépenses en temps réel',
          text: 'Visualisez vos transactions au fil de l’eau, avec ingestion automatique depuis vos régies, moyens de paiement et workflows de facturation.',
        },
        {
          title: 'Maîtrise des coûts',
          text: 'Gardez le contrôle de votre burn rate. Recevez des alertes avant tout dépassement de campagne.',
        },
      ],
    },
    gaps: {
      title: 'Plus de décalage avec la *Finance*. Maîtrisez *vos dépenses* et *votre narration.*',
      cards: [
        {
          title: 'Gestion du budget en temps réel',
          text: 'Voyez le tableau complet. Centralisez vos dépenses marketing dans un processus automatisé qui vous garde en contrôle.',
          cta: 'Découvrir',
        },
        {
          title: 'Ajoutez vos dépenses facilement',
          text: 'Permettez à vos équipes de saisir dépenses engagées et facturées dans un seul workflow centralisé et automatisé. Fini la multiplication des onglets.',
          cta: 'Découvrir',
        },
      ],
      mock: {
        budget: 'Budget',
        rows: [
          { label: 'Digital', value: '710 000 €' },
          { label: 'Événements', value: '670 000 €' },
          { label: 'Contenu', value: '350 000 €' },
        ],
        form: {
          title: 'Nouvelle dépense',
          vendor: 'Fournisseur',
          vendorValue: 'Google Ads',
          amount: 'Montant',
          currency: 'Devise',
          currencyValue: 'EUR',
          budget: 'Budget',
          budgetPlaceholder: 'Choisir un budget...',
          category: 'Catégorie',
          categoryPlaceholder: 'Choisir une catégorie',
        },
      },
    },
    integrations: {
      title: 'Connectez vos plateformes et *centralisez vos coûts.*',
      items: ['Google Ads', 'Instagram', 'Facebook', 'LinkedIn', 'G2', 'Slack', 'Claude', 'Bing'],
    },
    quote: {
      text: 'Quand le Marketing maîtrise les chiffres, les échanges avec la Finance deviennent *vraiment stratégiques.*',
      author: 'Idriss Roumili',
      role: 'Growth Director chez PayFit',
    },
    final: { title: 'Le budget marketing devient enfin *simple.*', cta: 'Essayer gratuitement' },
  },
  features: {
    title: 'Fonctionnalités - Logiciel de budget marketing | Spendbaker',
    description:
      'Construction, pilotage et reporting du budget dans une seule plateforme intelligente.',
    h1: 'Un logiciel de budget marketing pour planifier et suivre vos dépenses',
    sub: 'La gestion du budget marketing est un processus manuel, complexe et fragmenté. Spendbaker unifie tout en une seule plateforme intelligente.',
  },
  pricing: {
    title: 'Prix - Logiciel de gestion de budget marketing | Spendbaker',
    description: 'Une tarification simple pour le logiciel de budget marketing Spendbaker.',
    h1: 'Prix',
    sub: 'Les tarifs arrivent bientôt.',
  },
  demo: {
    title: 'Voir la démo - Spendbaker',
    description:
      'Découvrez comment Spendbaker construit et suit votre budget marketing en temps réel.',
    h1: 'Voir la démo',
    sub: 'Une visite de la plateforme en 2 minutes. Bientôt disponible.',
  },
  contact: {
    title: 'Nous contacter - Spendbaker',
    description: "Contactez l'équipe Spendbaker.",
    h1: 'Nous contacter',
    sub: 'Une question sur Spendbaker ? Nous serons ravis de vous répondre.',
  },
};
