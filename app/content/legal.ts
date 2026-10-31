// Terms and Conditions of Use / Conditions Générales d'Utilisation, verbatim from the texts provided.
// Do not paraphrase: this is legal text. Structure (sections, sub-headings, lists) is identical in both languages.
import type { Lang } from '~/site';

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; num: string; text: string }
  | { type: 'ul'; items: (string | { text: string; items: string[] })[] }
  | { type: 'lines'; lines: string[] };

export type LegalSection = { id: string; num: string; title: string; blocks: LegalBlock[] };
export type LegalDoc = {
  title: string;
  updated?: string; // shown under the title when present
  company?: string[]; // company details box, when present
  sections: LegalSection[];
};

export const terms: Record<Lang, LegalDoc> = {
  en: {
    title: 'TERMS AND CONDITIONS OF USE - SPENDBAKER',
    updated: 'Last updated: March 24 2026',
    company: [
      'Spendbaker',
      'SIREN :102 818 408',
      'SIRET :102 818 408 00019',
      'SAS, société par actions simplifiée',
    ],
    sections: [
      {
        id: 'section-1',
        num: '1',
        title: 'Preamble and Acceptance',
        blocks: [
          {
            type: 'p',
            text: 'These Terms and Conditions of Use (hereinafter the "Terms" or "Conditions") govern the use of the SaaS platform Spendbaker (hereinafter the "Service" or the "Platform"), accessible via the website spendbaker.com and any associated application.',
          },
          {
            type: 'p',
            text: 'By accessing and using Spendbaker, you acknowledge that you have read, understood, and unconditionally accepted these Terms. If you do not accept these Terms, you must not use the Service.',
          },
          {
            type: 'p',
            text: 'Spendbaker is a marketing budget management and tracking platform designed for marketing teams to enter, track, and control their budget expenses.',
          },
        ],
      },
      {
        id: 'section-2',
        num: '2',
        title: 'Definitions',
        blocks: [
          {
            type: 'p',
            text: '"Spendbaker": refers to the SaaS platform for marketing budget management, its services and associated features.',
          },
          {
            type: 'p',
            text: '"User": any natural or legal person having access to the Service, whether administrator, manager, or contributor.',
          },
          {
            type: 'p',
            text: '"Account": the personal or organizational space created by the User to access the Service.',
          },
          {
            type: 'p',
            text: '"Data": all information, budget data, expenses, reports, and content entered or generated through the Platform.',
          },
          {
            type: 'p',
            text: '"Organization": the entity (company, association, etc.) under which an Account is created and which may include multiple Users.',
          },
          {
            type: 'p',
            text: '"Subscription": the Service access contract concluded between the Organization and Spendbaker, defining the duration, price, and included features.',
          },
        ],
      },
      {
        id: 'section-3',
        num: '3',
        title: 'Service Description',
        blocks: [
          {
            type: 'h',
            num: '3.1',
            text: 'Main Features',
          },
          {
            type: 'p',
            text: 'Spendbaker is a SaaS platform enabling marketing teams to:',
          },
          {
            type: 'ul',
            items: [
              'Enter and manage budgets: creation and allocation of budgets by campaign, project, or period',
              'Track expenses: recording and real-time tracking of marketing expenses',
              'Control budgets: visualization of budget consumption, overrun alerts',
              'Generate reports: creation of dashboards, analysis reports, and data exports',
              'Manage teams: user administration, role and permission assignment',
              'Automate processes: approval workflows, notifications, and integrations',
            ],
          },
          {
            type: 'h',
            num: '3.2',
            text: 'Service Availability',
          },
          {
            type: 'p',
            text: 'Spendbaker strives to ensure 24/7 Service availability, subject to scheduled or emergency maintenance operations. Spendbaker does not guarantee uninterrupted availability and reserves the right to temporarily interrupt access to the Service for technical, maintenance, or security reasons.',
          },
          {
            type: 'h',
            num: '3.3',
            text: 'Service Evolution',
          },
          {
            type: 'p',
            text: 'Spendbaker reserves the right to modify, improve, or remove Service features at any time, with or without notice. New features may be subject to additional conditions.',
          },
        ],
      },
      {
        id: 'section-4',
        num: '4',
        title: 'Registration and User Account',
        blocks: [
          {
            type: 'h',
            num: '4.1',
            text: 'Account Creation',
          },
          {
            type: 'p',
            text: 'To use Spendbaker, you must create an Account by providing accurate, complete, and up-to-date information. You are responsible for the confidentiality of your login credentials (username, password) and all activities performed under your Account.',
          },
          {
            type: 'h',
            num: '4.2',
            text: 'User Responsibility',
          },
          {
            type: 'p',
            text: 'You agree to:',
          },
          {
            type: 'ul',
            items: [
              'Maintain the security and confidentiality of your credentials',
              'Immediately notify Spendbaker of any unauthorized use of your Account',
              'Use the Service in accordance with applicable laws and regulations',
              'Not share your credentials with third parties',
              'Ensure the truthfulness and accuracy of Data entered',
            ],
          },
          {
            type: 'h',
            num: '4.3',
            text: 'User Management within an Organization',
          },
          {
            type: 'p',
            text: 'The administrator of an Organization is responsible for managing Users, assigning roles and permissions, and ensuring compliance with the Service usage by all Users of their Organization.',
          },
        ],
      },
      {
        id: 'section-5',
        num: '5',
        title: 'Service Use',
        blocks: [
          {
            type: 'h',
            num: '5.1',
            text: 'Authorized Use',
          },
          {
            type: 'p',
            text: 'The Service is intended for professional use for marketing budget management. You agree to use the Service only for lawful purposes and in accordance with these Terms.',
          },
          {
            type: 'h',
            num: '5.2',
            text: 'Prohibited Uses',
          },
          {
            type: 'p',
            text: 'It is strictly prohibited to:',
          },
          {
            type: 'ul',
            items: [
              'Use the Service for illegal, fraudulent, or harmful purposes',
              'Attempt to gain unauthorized access to the Service, systems, or data of other Users',
              'Introduce viruses, malicious code, or any element likely to disrupt the Service',
              'Copy, reproduce, modify, or create derivative works of the Service without authorization',
              'Use robots, automated scripts, or any automated means to access the Service',
              'Transfer, sell, or rent your access to the Service to third parties',
              'Use the Service to store or process unauthorized sensitive data (health data, complete banking data, etc.)',
            ],
          },
          {
            type: 'h',
            num: '5.3',
            text: 'Data and Content',
          },
          {
            type: 'p',
            text: 'You retain all ownership rights to the Data you enter into the Service. By using Spendbaker, you grant Spendbaker a non-exclusive, worldwide, and royalty-free license to use, store, and process your Data solely for the purpose of providing the Service.',
          },
          {
            type: 'p',
            text: 'You warrant that you have all necessary rights to the Data you enter and that its use through the Service does not violate any third-party rights.',
          },
        ],
      },
      {
        id: 'section-6',
        num: '6',
        title: 'Pricing and Payment',
        blocks: [
          {
            type: 'h',
            num: '6.1',
            text: 'Subscriptions',
          },
          {
            type: 'p',
            text: 'Access to the Service is subject to a paid subscription according to the plans offered by Spendbaker. Pricing, included features, and billing conditions are detailed on the Spendbaker website or in the subscription contract.',
          },
          {
            type: 'h',
            num: '6.2',
            text: 'Billing',
          },
          {
            type: 'p',
            text: 'Subscriptions are billed in advance according to the chosen period (monthly, quarterly, annual). Prices are indicated in euros, including all taxes (VAT included), unless otherwise stated.',
          },
          {
            type: 'h',
            num: '6.3',
            text: 'Renewal and Termination',
          },
          {
            type: 'p',
            text: 'Subscriptions automatically renew at the end of each period, unless prior termination. You may terminate your subscription at any time through your Account or by contacting support. Termination takes effect at the end of the current period. No refund will be issued for the current period.',
          },
          {
            type: 'p',
            text: 'Spendbaker reserves the right to terminate or suspend your access to the Service in case of non-payment, violation of these Terms, or for any legitimate reason.',
          },
          {
            type: 'h',
            num: '6.4',
            text: 'Price Modifications',
          },
          {
            type: 'p',
            text: "Spendbaker reserves the right to modify prices at any time. Price changes will be communicated to Users with at least 30 days' notice. In case of disagreement, you may terminate your subscription before the new pricing takes effect.",
          },
        ],
      },
      {
        id: 'section-7',
        num: '7',
        title: 'Intellectual Property',
        blocks: [
          {
            type: 'h',
            num: '7.1',
            text: 'Spendbaker Ownership',
          },
          {
            type: 'p',
            text: 'The Service, including but not limited to, the software, interfaces, designs, logos, trademarks, texts, and any other content, is the exclusive property of Spendbaker or its partners and is protected by intellectual property laws.',
          },
          {
            type: 'h',
            num: '7.2',
            text: 'Use License',
          },
          {
            type: 'p',
            text: 'Spendbaker grants you a personal, non-exclusive, non-transferable, and revocable license to use the Service in accordance with these Terms, for the duration of your subscription.',
          },
          {
            type: 'h',
            num: '7.3',
            text: 'Data Ownership',
          },
          {
            type: 'p',
            text: 'You retain all ownership rights to your Data. Spendbaker claims no ownership rights to your Data.',
          },
        ],
      },
      {
        id: 'section-8',
        num: '8',
        title: 'Personal Data Protection',
        blocks: [
          {
            type: 'h',
            num: '8.1',
            text: 'Data Processing',
          },
          {
            type: 'p',
            text: 'The processing of your personal data is governed by our Privacy Policy, which forms an integral part of these Terms. By using the Service, you accept the processing of your personal data in accordance with this policy.',
          },
          {
            type: 'h',
            num: '8.2',
            text: 'GDPR Compliance',
          },
          {
            type: 'p',
            text: 'Spendbaker is committed to complying with the General Data Protection Regulation (GDPR) and all applicable regulations regarding personal data protection.',
          },
          {
            type: 'h',
            num: '8.3',
            text: 'Data Security',
          },
          {
            type: 'p',
            text: 'Spendbaker implements appropriate technical and organizational measures to protect your Data against unauthorized access, loss, destruction, or alteration. However, no system is completely secure and Spendbaker cannot guarantee absolute security.',
          },
          {
            type: 'h',
            num: '8.4',
            text: 'Data Retention',
          },
          {
            type: 'p',
            text: 'In case of subscription termination, you may export your Data before the end of your subscription period. After termination, Spendbaker will retain your Data for a period of 30 days, after which they may be permanently deleted, except where legal retention obligations apply.',
          },
        ],
      },
      {
        id: 'section-9',
        num: '9',
        title: 'Liability and Warranties',
        blocks: [
          {
            type: 'h',
            num: '9.1',
            text: 'Availability and Performance',
          },
          {
            type: 'p',
            text: 'Spendbaker strives to provide a reliable and performant Service, but does not guarantee that the Service will be free from errors, interruptions, or defects. The Service is provided "as is" and "as available."',
          },
          {
            type: 'h',
            num: '9.2',
            text: 'Limitation of Liability',
          },
          {
            type: 'p',
            text: "Within the limits permitted by law, Spendbaker's liability is limited to direct and foreseeable damages resulting from a breach of its contractual obligations. Spendbaker shall in no case be held liable for:",
          },
          {
            type: 'ul',
            items: [
              'Indirect damages, loss of profits, loss of data, loss of business',
              'Damages resulting from inappropriate use of the Service',
              'Damages resulting from the use of erroneous or incomplete data entered by the User',
              "Damages resulting from Service interruptions due to causes beyond Spendbaker's control",
            ],
          },
          {
            type: 'p',
            text: "Spendbaker's total liability shall not exceed the amount of sums paid by the User during the 12 months preceding the damage.",
          },
          {
            type: 'h',
            num: '9.3',
            text: 'Force Majeure',
          },
          {
            type: 'p',
            text: 'Spendbaker shall not be held liable for any delay or failure in the performance of its obligations resulting from circumstances beyond its control, including in case of force majeure, natural disaster, network failure, act of terrorism, or government decision.',
          },
          {
            type: 'h',
            num: '9.4',
            text: 'Warranties',
          },
          {
            type: 'p',
            text: 'Spendbaker does not warrant that the Service will meet all your expectations or specific needs. You are solely responsible for the suitability of the Service to your needs and the use you make of it.',
          },
        ],
      },
      {
        id: 'section-10',
        num: '10',
        title: 'Support and Assistance',
        blocks: [
          {
            type: 'h',
            num: '10.1',
            text: 'Technical Support',
          },
          {
            type: 'p',
            text: 'Spendbaker provides technical support to assist you in using the Service. Support terms (hours, contact channels, response times) are detailed on the Spendbaker website.',
          },
          {
            type: 'h',
            num: '10.2',
            text: 'Service Level',
          },
          {
            type: 'p',
            text: 'Spendbaker strives to maintain a Service availability level in line with industry standards, but does not guarantee a specific service level (SLA) unless otherwise stated in your subscription contract.',
          },
        ],
      },
      {
        id: 'section-11',
        num: '11',
        title: 'Terms Modifications',
        blocks: [
          {
            type: 'p',
            text: "Spendbaker reserves the right to modify these Terms at any time. Modifications will be communicated to Users by email or via a notification in the Service, with at least 30 days' notice.",
          },
          {
            type: 'p',
            text: 'In case of substantial modification, you may terminate your subscription free of charge before the new Terms take effect. Continued use of the Service after the modifications take effect constitutes acceptance of the new Terms.',
          },
        ],
      },
      {
        id: 'section-12',
        num: '12',
        title: 'Termination',
        blocks: [
          {
            type: 'h',
            num: '12.1',
            text: 'Termination by User',
          },
          {
            type: 'p',
            text: 'You may terminate your subscription at any time through your Account or by contacting Spendbaker support. Termination takes effect at the end of the current subscription period.',
          },
          {
            type: 'h',
            num: '12.2',
            text: 'Termination by Spendbaker',
          },
          {
            type: 'p',
            text: 'Spendbaker may suspend or terminate your access to the Service immediately, without notice, in case of:',
          },
          {
            type: 'ul',
            items: [
              'Non-payment of amounts due',
              'Violation of these Terms',
              'Fraudulent or illegal use of the Service',
              'Any other legitimate reason',
            ],
          },
          {
            type: 'h',
            num: '12.3',
            text: 'Consequences of Termination',
          },
          {
            type: 'p',
            text: 'In case of termination:',
          },
          {
            type: 'ul',
            items: [
              'Your access to the Service will be suspended or deleted',
              'You may export your Data for 30 days after termination',
              'No refund will be issued for the current period',
              'Provisions that, by their nature, must survive termination, will remain in effect',
            ],
          },
        ],
      },
      {
        id: 'section-13',
        num: '13',
        title: 'Integrations and API',
        blocks: [
          {
            type: 'h',
            num: '13.1',
            text: 'Third-Party Integrations',
          },
          {
            type: 'p',
            text: 'Spendbaker may offer integrations with third-party services (accounting tools, ERP, advertising platforms.). The use of these integrations is subject to the terms of use of the relevant third-party services.',
          },
          {
            type: 'h',
            num: '13.2',
            text: 'API',
          },
          {
            type: 'p',
            text: 'If Spendbaker provides an API (Application Programming Interface), its use is subject to specific conditions that will be communicated separately. Any unauthorized use of the API is strictly prohibited.',
          },
        ],
      },
      {
        id: 'section-14',
        num: '14',
        title: 'General Provisions',
        blocks: [
          {
            type: 'h',
            num: '14.1',
            text: 'Applicable Law and Jurisdiction',
          },
          {
            type: 'p',
            text: 'These Terms are governed by French law. In case of dispute, and in the absence of an amicable agreement, French courts shall have exclusive jurisdiction.',
          },
          {
            type: 'h',
            num: '14.2',
            text: 'Mediation',
          },
          {
            type: 'p',
            text: 'In accordance with applicable legislation, any consumer has the right to resort free of charge to a consumer mediator for the amicable resolution of a dispute with Spendbaker.',
          },
          {
            type: 'h',
            num: '14.3',
            text: 'Severability',
          },
          {
            type: 'p',
            text: 'If any clause of these Terms is declared null or inapplicable, the other clauses shall remain in effect.',
          },
          {
            type: 'h',
            num: '14.4',
            text: 'Non-Waiver',
          },
          {
            type: 'p',
            text: 'The fact that Spendbaker does not enforce a clause of these Terms at a given time does not constitute a waiver to enforce it later.',
          },
          {
            type: 'h',
            num: '14.5',
            text: 'Assignment',
          },
          {
            type: 'p',
            text: "You may not assign or transfer your rights and obligations arising from these Terms without Spendbaker's prior written consent. Spendbaker may assign its rights and obligations at any time.",
          },
          {
            type: 'h',
            num: '14.6',
            text: 'Entire Agreement',
          },
          {
            type: 'p',
            text: 'These Terms, together with the Privacy Policy and any referenced document, constitute the entire agreement between you and Spendbaker regarding the use of the Service.',
          },
        ],
      },
      {
        id: 'section-15',
        num: '15',
        title: 'Contact',
        blocks: [
          {
            type: 'p',
            text: 'For any questions regarding these Terms and Conditions of Use, you may contact us:',
          },
          {
            type: 'lines',
            lines: [
              'Spendbaker',
              'SIREN :102 818 408',
              'SIRET :102 818 408 00019',
              'SAS, société par actions simplifiée',
              'Email: contact@spendbaker.com',
              'Address: 7 place de l’adjudant vincennot',
              'Website: spendbaker.com',
            ],
          },
          {
            type: 'p',
            text: 'By accepting these Terms, you acknowledge that you have read, understood, and accepted all the provisions above.',
          },
        ],
      },
    ],
  },
  fr: {
    title: "CONDITIONS GÉNÉRALES D'UTILISATION - SPENDBAKER",
    updated: 'Dernière mise à jour : 24 mars 2026',
    company: [
      'Spendbaker',
      'SIREN :102 818 408',
      'SIRET :102 818 408 00019',
      'SAS, société par actions simplifiée',
    ],
    sections: [
      {
        id: 'section-1',
        num: '1',
        title: 'Préambule et acceptation',
        blocks: [
          {
            type: 'p',
            text: 'Les présentes Conditions Générales d\'Utilisation (ci-après les "CGU" ou "Conditions") régissent l\'utilisation de la plateforme SaaS Spendbaker (ci-après le "Service" ou la "Plateforme"), accessible via le site web spendbaker.com et toute application associée.',
          },
          {
            type: 'p',
            text: "En accédant et en utilisant Spendbaker, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes Conditions. Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser le Service.",
          },
          {
            type: 'p',
            text: 'Spendbaker est une plateforme de gestion et de suivi des budgets marketing destinée aux équipes marketing pour la saisie, le suivi et le contrôle de leurs dépenses budgétaires.',
          },
        ],
      },
      {
        id: 'section-2',
        num: '2',
        title: 'Définitions',
        blocks: [
          {
            type: 'p',
            text: '"Spendbaker" : désigne la plateforme SaaS de gestion de budgets marketing, ses services et fonctionnalités associées.',
          },
          {
            type: 'p',
            text: '"Utilisateur" : toute personne physique ou morale ayant accès au Service, qu\'elle soit administrateur, manager ou contributeur.',
          },
          {
            type: 'p',
            text: '"Compte" : l\'espace personnel ou organisationnel créé par l\'Utilisateur pour accéder au Service.',
          },
          {
            type: 'p',
            text: '"Données" : toutes les informations, données budgétaires, dépenses, rapports et contenus saisis ou générés via la Plateforme.',
          },
          {
            type: 'p',
            text: '"Organisation" : l\'entité (entreprise, association, etc.) sous laquelle un Compte est créé et qui peut regrouper plusieurs Utilisateurs.',
          },
          {
            type: 'p',
            text: '"Abonnement" : le contrat d\'accès au Service conclu entre l\'Organisation et Spendbaker, définissant la durée, le prix et les fonctionnalités incluses.',
          },
        ],
      },
      {
        id: 'section-3',
        num: '3',
        title: 'Description du service',
        blocks: [
          {
            type: 'h',
            num: '3.1',
            text: 'Fonctionnalités principales',
          },
          {
            type: 'p',
            text: 'Spendbaker est une plateforme SaaS permettant aux équipes marketing de :',
          },
          {
            type: 'ul',
            items: [
              'Saisir et gérer les budgets : création et attribution de budgets par campagne, projet ou période',
              'Suivre les dépenses : enregistrement et suivi en temps réel des dépenses marketing',
              'Contrôler les budgets : visualisation de la consommation budgétaire, alertes de dépassement',
              "Générer des rapports : création de tableaux de bord, rapports d'analyse et exports de données",
              'Gérer les équipes : administration des utilisateurs, attribution de rôles et permissions',
              "Automatiser les processus : workflows d'approbation, notifications et intégrations",
            ],
          },
          {
            type: 'h',
            num: '3.2',
            text: 'Disponibilité du Service',
          },
          {
            type: 'p',
            text: "Spendbaker s'efforce d'assurer une disponibilité du Service 24h/24 et 7j/7, sous réserve des opérations de maintenance programmées ou d'urgence. Spendbaker ne garantit pas une disponibilité ininterrompue et se réserve le droit d'interrompre temporairement l'accès au Service pour des raisons techniques, de maintenance ou de sécurité.",
          },
          {
            type: 'h',
            num: '3.3',
            text: 'Évolutions du Service',
          },
          {
            type: 'p',
            text: 'Spendbaker se réserve le droit de modifier, améliorer ou supprimer des fonctionnalités du Service à tout moment, avec ou sans préavis. Les nouvelles fonctionnalités peuvent être soumises à des conditions supplémentaires.',
          },
        ],
      },
      {
        id: 'section-4',
        num: '4',
        title: 'Inscription et compte utilisateur',
        blocks: [
          {
            type: 'h',
            num: '4.1',
            text: 'Création de compte',
          },
          {
            type: 'p',
            text: "Pour utiliser Spendbaker, vous devez créer un Compte en fournissant des informations exactes, complètes et à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion (nom d'utilisateur, mot de passe) et de toutes les activités effectuées sous votre Compte.",
          },
          {
            type: 'h',
            num: '4.2',
            text: "Responsabilité de l'Utilisateur",
          },
          {
            type: 'p',
            text: 'Vous vous engagez à :',
          },
          {
            type: 'ul',
            items: [
              'Maintenir la sécurité et la confidentialité de vos identifiants',
              'Notifier immédiatement Spendbaker de toute utilisation non autorisée de votre Compte',
              'Utiliser le Service conformément aux lois et réglementations en vigueur',
              'Ne pas partager vos identifiants avec des tiers',
              "Assurer la véracité et l'exactitude des Données saisies",
            ],
          },
          {
            type: 'h',
            num: '4.3',
            text: "Gestion des utilisateurs au sein d'une Organisation",
          },
          {
            type: 'p',
            text: "L'administrateur d'une Organisation est responsable de la gestion des Utilisateurs, de l'attribution des rôles et permissions, et de la conformité de l'utilisation du Service par tous les Utilisateurs de son Organisation.",
          },
        ],
      },
      {
        id: 'section-5',
        num: '5',
        title: 'Utilisation du service',
        blocks: [
          {
            type: 'h',
            num: '5.1',
            text: 'Utilisation autorisée',
          },
          {
            type: 'p',
            text: 'Le Service est destiné à un usage professionnel pour la gestion de budgets marketing. Vous vous engagez à utiliser le Service uniquement à des fins légales et conformément aux présentes Conditions.',
          },
          {
            type: 'h',
            num: '5.2',
            text: 'Utilisations interdites',
          },
          {
            type: 'p',
            text: 'Il est strictement interdit de :',
          },
          {
            type: 'ul',
            items: [
              'Utiliser le Service à des fins illégales, frauduleuses ou nuisibles',
              "Tenter d'accéder de manière non autorisée au Service, aux systèmes ou aux données d'autres Utilisateurs",
              'Introduire des virus, codes malveillants ou tout élément susceptible de perturber le Service',
              'Copier, reproduire, modifier ou créer des œuvres dérivées du Service sans autorisation',
              'Utiliser des robots, scripts automatisés ou tout moyen automatisé pour accéder au Service',
              'Transférer, vendre ou louer votre accès au Service à des tiers',
              'Utiliser le Service pour stocker ou traiter des données sensibles non autorisées (données de santé, données bancaires complètes, etc.)',
            ],
          },
          {
            type: 'h',
            num: '5.3',
            text: 'Données et contenu',
          },
          {
            type: 'p',
            text: "Vous conservez tous les droits de propriété sur les Données que vous saisissez dans le Service. En utilisant Spendbaker, vous accordez à Spendbaker une licence non exclusive, mondiale et gratuite d'utiliser, stocker et traiter vos Données uniquement dans le cadre de la fourniture du Service.",
          },
          {
            type: 'p',
            text: 'Vous garantissez que vous disposez de tous les droits nécessaires sur les Données que vous saisissez et que leur utilisation via le Service ne viole aucun droit de tiers.',
          },
        ],
      },
      {
        id: 'section-6',
        num: '6',
        title: 'Tarification et paiement',
        blocks: [
          {
            type: 'h',
            num: '6.1',
            text: 'Abonnements',
          },
          {
            type: 'p',
            text: "L'accès au Service est soumis à un abonnement payant selon les formules proposées par Spendbaker. Les tarifs, fonctionnalités incluses et conditions de facturation sont détaillés sur le site web de Spendbaker ou dans le contrat d'abonnement.",
          },
          {
            type: 'h',
            num: '6.2',
            text: 'Facturation',
          },
          {
            type: 'p',
            text: "Les abonnements sont facturés à l'avance selon la période choisie (mensuelle, trimestrielle, annuelle). Les prix sont indiqués en euros, toutes taxes comprises (TTC), sauf mention contraire.",
          },
          {
            type: 'h',
            num: '6.3',
            text: 'Renouvellement et résiliation',
          },
          {
            type: 'p',
            text: 'Les abonnements se renouvellent automatiquement à la fin de chaque période, sauf résiliation préalable. Vous pouvez résilier votre abonnement à tout moment via votre Compte ou en contactant le support. La résiliation prend effet à la fin de la période en cours. Aucun remboursement ne sera effectué pour la période en cours.',
          },
          {
            type: 'p',
            text: 'Spendbaker se réserve le droit de résilier ou de suspendre votre accès au Service en cas de non-paiement, de violation des présentes Conditions ou pour tout motif légitime.',
          },
          {
            type: 'h',
            num: '6.4',
            text: 'Modification des tarifs',
          },
          {
            type: 'p',
            text: "Spendbaker se réserve le droit de modifier les tarifs à tout moment. Les modifications de tarifs seront communiquées aux Utilisateurs avec un préavis d'au moins 30 jours. En cas de désaccord, vous pouvez résilier votre abonnement avant l'entrée en vigueur de la nouvelle tarification.",
          },
        ],
      },
      {
        id: 'section-7',
        num: '7',
        title: 'Propriété intellectuelle',
        blocks: [
          {
            type: 'h',
            num: '7.1',
            text: 'Propriété de Spendbaker',
          },
          {
            type: 'p',
            text: "Le Service, incluant mais sans s'y limiter, le logiciel, les interfaces, les designs, les logos, les marques, les textes et tout autre contenu, est la propriété exclusive de Spendbaker ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle.",
          },
          {
            type: 'h',
            num: '7.2',
            text: "Licence d'utilisation",
          },
          {
            type: 'p',
            text: "Spendbaker vous accorde une licence personnelle, non exclusive, non transférable et révocable d'utiliser le Service conformément aux présentes Conditions, pour la durée de votre abonnement.",
          },
          {
            type: 'h',
            num: '7.3',
            text: 'Propriété des Données',
          },
          {
            type: 'p',
            text: 'Vous conservez tous les droits de propriété sur vos Données. Spendbaker ne revendique aucun droit de propriété sur vos Données.',
          },
        ],
      },
      {
        id: 'section-8',
        num: '8',
        title: 'Protection des données personnelles',
        blocks: [
          {
            type: 'h',
            num: '8.1',
            text: 'Traitement des données',
          },
          {
            type: 'p',
            text: 'Le traitement de vos données personnelles est régi par notre Politique de Confidentialité, qui fait partie intégrante des présentes Conditions. En utilisant le Service, vous acceptez le traitement de vos données personnelles conformément à cette politique.',
          },
          {
            type: 'h',
            num: '8.2',
            text: 'Conformité RGPD',
          },
          {
            type: 'p',
            text: "Spendbaker s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) et toutes les réglementations applicables en matière de protection des données personnelles.",
          },
          {
            type: 'h',
            num: '8.3',
            text: 'Sécurité des données',
          },
          {
            type: 'p',
            text: "Spendbaker met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos Données contre tout accès non autorisé, perte, destruction ou altération. Cependant, aucun système n'est totalement sécurisé et Spendbaker ne peut garantir une sécurité absolue.",
          },
          {
            type: 'h',
            num: '8.4',
            text: 'Conservation des données',
          },
          {
            type: 'p',
            text: "En cas de résiliation de votre abonnement, vous pouvez exporter vos Données avant la fin de votre période d'abonnement. Après la résiliation, Spendbaker conservera vos Données pendant une période de 30 jours, après laquelle elles pourront être supprimées définitivement, sauf obligation légale de conservation.",
          },
        ],
      },
      {
        id: 'section-9',
        num: '9',
        title: 'Responsabilité et garanties',
        blocks: [
          {
            type: 'h',
            num: '9.1',
            text: 'Disponibilité et performance',
          },
          {
            type: 'p',
            text: 'Spendbaker s\'efforce de fournir un Service fiable et performant, mais ne garantit pas que le Service sera exempt d\'erreurs, d\'interruptions ou de défauts. Le Service est fourni "en l\'état" et "selon disponibilité".',
          },
          {
            type: 'h',
            num: '9.2',
            text: 'Limitation de responsabilité',
          },
          {
            type: 'p',
            text: "Dans les limites autorisées par la loi, la responsabilité de Spendbaker est limitée aux dommages directs et prévisibles résultant d'un manquement à ses obligations contractuelles. Spendbaker ne pourra en aucun cas être tenu responsable de :",
          },
          {
            type: 'ul',
            items: [
              "Dommages indirects, perte de profits, perte de données, perte d'exploitation",
              "Dommages résultant d'une utilisation inappropriée du Service",
              "Dommages résultant de l'utilisation de données erronées ou incomplètes saisies par l'Utilisateur",
              "Dommages résultant d'interruptions du Service dues à des causes indépendantes de la volonté de Spendbaker",
            ],
          },
          {
            type: 'p',
            text: "La responsabilité totale de Spendbaker ne pourra excéder le montant des sommes versées par l'Utilisateur au cours des 12 derniers mois précédant le dommage.",
          },
          {
            type: 'h',
            num: '9.3',
            text: 'Force majeure',
          },
          {
            type: 'p',
            text: "Spendbaker ne pourra être tenu responsable de tout retard ou défaillance dans l'exécution de ses obligations résultant de circonstances indépendantes de sa volonté, notamment en cas de force majeure, de catastrophe naturelle, de panne de réseau, d'acte de terrorisme ou de décision gouvernementale.",
          },
          {
            type: 'h',
            num: '9.4',
            text: 'Garanties',
          },
          {
            type: 'p',
            text: "Spendbaker ne garantit pas que le Service répondra à toutes vos attentes ou besoins spécifiques. Vous êtes seul responsable de l'adéquation du Service à vos besoins et de l'utilisation que vous en faites.",
          },
        ],
      },
      {
        id: 'section-10',
        num: '10',
        title: 'Support et assistance',
        blocks: [
          {
            type: 'h',
            num: '10.1',
            text: 'Support technique',
          },
          {
            type: 'p',
            text: "Spendbaker met à disposition un support technique pour vous aider dans l'utilisation du Service. Les modalités de support (horaires, canaux de contact, délais de réponse) sont détaillées sur le site web de Spendbaker.",
          },
          {
            type: 'h',
            num: '10.2',
            text: 'Niveau de service',
          },
          {
            type: 'p',
            text: "Spendbaker s'efforce de maintenir un niveau de disponibilité du Service conforme aux standards de l'industrie, mais ne garantit pas un niveau de service spécifique (SLA) sauf mention contraire dans votre contrat d'abonnement.",
          },
        ],
      },
      {
        id: 'section-11',
        num: '11',
        title: 'Modifications des conditions',
        blocks: [
          {
            type: 'p',
            text: "Spendbaker se réserve le droit de modifier les présentes Conditions à tout moment. Les modifications seront communiquées aux Utilisateurs par email ou via une notification dans le Service, avec un préavis d'au moins 30 jours.",
          },
          {
            type: 'p',
            text: "En cas de modification substantielle, vous pourrez résilier votre abonnement sans frais avant l'entrée en vigueur des nouvelles Conditions. L'utilisation continue du Service après l'entrée en vigueur des modifications vaut acceptation des nouvelles Conditions.",
          },
        ],
      },
      {
        id: 'section-12',
        num: '12',
        title: 'Résiliation',
        blocks: [
          {
            type: 'h',
            num: '12.1',
            text: "Résiliation par l'Utilisateur",
          },
          {
            type: 'p',
            text: "Vous pouvez résilier votre abonnement à tout moment via votre Compte ou en contactant le support Spendbaker. La résiliation prend effet à la fin de la période d'abonnement en cours.",
          },
          {
            type: 'h',
            num: '12.2',
            text: 'Résiliation par Spendbaker',
          },
          {
            type: 'p',
            text: 'Spendbaker peut suspendre ou résilier votre accès au Service immédiatement, sans préavis, en cas de :',
          },
          {
            type: 'ul',
            items: [
              'Non-paiement des sommes dues',
              'Violation des présentes Conditions',
              'Utilisation frauduleuse ou illégale du Service',
              'Toute autre raison légitime',
            ],
          },
          {
            type: 'h',
            num: '12.3',
            text: 'Conséquences de la résiliation',
          },
          {
            type: 'p',
            text: 'En cas de résiliation :',
          },
          {
            type: 'ul',
            items: [
              'Votre accès au Service sera suspendu ou supprimé',
              'Vous pourrez exporter vos Données pendant 30 jours après la résiliation',
              'Aucun remboursement ne sera effectué pour la période en cours',
              'Les dispositions qui, par leur nature, doivent survivre à la résiliation, resteront en vigueur',
            ],
          },
        ],
      },
      {
        id: 'section-13',
        num: '13',
        title: 'Intégrations et API',
        blocks: [
          {
            type: 'h',
            num: '13.1',
            text: 'Intégrations tierces',
          },
          {
            type: 'p',
            text: "Spendbaker peut proposer des intégrations avec des services tiers (outils comptables, ERP, plateformes publicitaires, etc.). L'utilisation de ces intégrations est soumise aux conditions d'utilisation des services tiers concernés.",
          },
          {
            type: 'h',
            num: '13.2',
            text: 'API',
          },
          {
            type: 'p',
            text: "Si Spendbaker met à disposition une API (Application Programming Interface), son utilisation est soumise à des conditions spécifiques qui seront communiquées séparément. Toute utilisation non autorisée de l'API est strictement interdite.",
          },
        ],
      },
      {
        id: 'section-14',
        num: '14',
        title: 'Dispositions générales',
        blocks: [
          {
            type: 'h',
            num: '14.1',
            text: 'Droit applicable et juridiction',
          },
          {
            type: 'p',
            text: "Les présentes Conditions sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux français seront seuls compétents.",
          },
          {
            type: 'h',
            num: '14.2',
            text: 'Médiation',
          },
          {
            type: 'p',
            text: "Conformément à la législation en vigueur, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige qui l'oppose à Spendbaker.",
          },
          {
            type: 'h',
            num: '14.3',
            text: 'Divisibilité',
          },
          {
            type: 'p',
            text: 'Si une clause des présentes Conditions est déclarée nulle ou inapplicable, les autres clauses demeureront en vigueur.',
          },
          {
            type: 'h',
            num: '14.4',
            text: 'Non-renonciation',
          },
          {
            type: 'p',
            text: "Le fait pour Spendbaker de ne pas se prévaloir à un moment donné d'une clause des présentes Conditions ne constitue pas une renonciation à s'en prévaloir ultérieurement.",
          },
          {
            type: 'h',
            num: '14.5',
            text: 'Cession',
          },
          {
            type: 'p',
            text: "Vous ne pouvez pas céder ou transférer vos droits et obligations découlant des présentes Conditions sans l'accord préalable écrit de Spendbaker. Spendbaker peut céder ses droits et obligations à tout moment.",
          },
          {
            type: 'h',
            num: '14.6',
            text: "Intégralité de l'accord",
          },
          {
            type: 'p',
            text: "Les présentes Conditions, ainsi que la Politique de Confidentialité et tout document référencé, constituent l'intégralité de l'accord entre vous et Spendbaker concernant l'utilisation du Service",
          },
        ],
      },
      {
        id: 'section-15',
        num: '15',
        title: 'Contact',
        blocks: [
          {
            type: 'p',
            text: "Pour toute question concernant les présentes Conditions Générales d'Utilisation, vous pouvez nous contacter :",
          },
          {
            type: 'lines',
            lines: [
              'Spendbaker',
              'SIREN :102 818 408',
              'SIRET :102 818 408 00019',
              'SAS, société par actions simplifiée',
              'Email: contact@spendbaker.com',
              'Address: 7 place de l’adjudant vincennot',
              'Website: spendbaker.com',
            ],
          },
          {
            type: 'p',
            text: "En acceptant ces Conditions, vous reconnaissez avoir lu, compris et accepté l'ensemble des dispositions ci-dessus.",
          },
        ],
      },
    ],
  },
};
