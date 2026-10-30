// Privacy Policy, verbatim from the text provided (English only: no French version exists yet).
// Do not paraphrase: this is legal text. Two purely structural splits, wording unchanged: section 7's last sentence
// is its own paragraph (it was glued to the last list item), and section 9's heading is split from its body text.
import type { LegalDoc } from './legal';

export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy - SPENDBAKER',
  sections: [
    {
      id: 'section-1',
      num: '1',
      title: 'Introduction',
      blocks: [
        {
          type: 'p',
          text: 'At Spendbaker, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our SaaS platform (spendbaker.com). By using our Service, you agree to the practices described in this policy.',
        },
      ],
    },
    {
      id: 'section-2',
      num: '2',
      title: 'Data Collection',
      blocks: [
        {
          type: 'p',
          text: 'We collect information that you provide directly to us (name, email, organization details). If you grant us permission to ads platforms (ex: Meta, Google, LinkedIn), Spendbaker accesses your Ads data via the API or MCP. This includes, but is not limited to, campaign names, spend, impressions, and performance metrics. We only access the data necessary to provide our budget tracking services.',
        },
      ],
    },
    {
      id: 'section-3',
      num: '3',
      title: 'Data Usage',
      blocks: [
        {
          type: 'p',
          text: 'The information we collect is used exclusively to:',
        },
        {
          type: 'ul',
          items: [
            'Provide and maintain our Service.',
            'Display your marketing expenses and performance metrics in your Spendbaker dashboard.',
            'Help you track and control your marketing budgets in real-time.',
            'Improve the features and user experience of the Platform.',
          ],
        },
        {
          type: 'h',
          num: '3.1',
          text: 'AI Assistant Features & Processing',
        },
        {
          type: 'p',
          text: 'When you activate and use the Spendbaker AI Assistant feature:',
        },
        {
          type: 'ul',
          items: [
            'Processed Data: The messages, prompts, context, and relevant organization metrics/data you submit to or query via the assistant are transmitted to our AI infrastructure provider (Becka and its underlying LLM providers) to generate answers and insights.',
            'Web Search Queries: If a request requires external web information, the query is passed to Brave Search to retrieve real-time search results.',
            'Training & Retaining Data: Data processed through our AI providers is used strictly to fulfill your requests and is not used by third-party model providers to train public models.',
          ],
        },
      ],
    },
    {
      id: 'section-4',
      num: '4',
      title: 'Data Retention & Deletion',
      blocks: [
        {
          type: 'p',
          text: 'We retain your data only for as long as your account is active or as needed to provide you with the Service. How to delete your data: You have the right to request the deletion of your data at any time.',
        },
        {
          type: 'ul',
          items: [
            'Self-Service: You can delete your account and all associated data directly via your "Account Settings" dashboard.',
            'Manual Request: You can send a formal data deletion request to contact@spendbaker.com. Upon receiving your request, we will delete all your personal information and stored Ads data from our servers within 30 days, except where we are required by law to retain certain records.',
          ],
        },
        {
          type: 'p',
          text: 'Read more here : https://app.spendbaker.com/privacy',
        },
      ],
    },
    {
      id: 'section-5',
      num: '5',
      title: 'Data Protection & Security mechanisms',
      blocks: [
        {
          type: 'p',
          text: 'We implement industry-standard security measures to protect your sensitive data against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
          type: 'ul',
          items: [
            'Encryption in Transit: All data transmitted between your browser, our servers, and third-party APIs (including Google) is encrypted using secure TLS/HTTPS protocols.',
            'Encryption at Rest: Sensitive data, including authentication tokens and personal information, is encrypted at rest within our secure databases.',
            'Access Controls: Access to user data is strictly limited to authorized Spendbaker personnel on a "need-to-know" basis for the sole purpose of operating and maintaining the Service.',
            "API Services Usage Disclosure: Spendbaker's use and transfer to any other app of information received from APIs (ex: for Google Ads we will adhere to the Google API Services User Data Policy, including the Limited Use requirements.)",
          ],
        },
      ],
    },
    {
      id: 'section-6',
      num: '6',
      title: 'Third-Party Sharing & Data Processors',
      blocks: [
        {
          type: 'p',
          text: 'We do not sell, rent, or trade your personal data. To provide and operate our Service, we share necessary data with trusted third-party service providers (Data Processors) acting on our behalf under strict data processing agreements.',
        },
        {
          type: 'p',
          text: 'These processors include:',
        },
        {
          type: 'ul',
          items: [
            'Hosting & Infrastructure: Cloud service providers hosting our databases and application logic.',
            {
              text: 'AI Assistant & Processing Infrastructure:',
              items: [
                'Becka (and underlying Large Language Model providers) for processing assistant prompts, user messages, and organization data when the AI feature is active.',
                'Brave Search (Brave Software, Inc.) for executing web search queries requested by or generated through the AI assistant.',
              ],
            },
          ],
        },
        {
          type: 'p',
          text: 'All service providers are bound by confidentiality obligations and are contractually restricted from using your data for any purpose other than providing services to Spendbaker. We do not share your marketing or Ads data with third-party advertisers.',
        },
      ],
    },
    {
      id: 'section-7',
      num: '7',
      title: 'Cookies and Tracking',
      blocks: [
        {
          type: 'p',
          text: 'Spendbaker uses cookies and similar tracking technologies to track activity on our Service and hold certain information. These are used to:',
        },
        {
          type: 'ul',
          items: [
            'Keep you logged in.',
            'Understand how you use our site to improve functionality.',
            'Analyze platform performance.',
          ],
        },
        {
          type: 'p',
          text: 'You can instruct your browser to refuse all cookies, but some parts of the Service may become inaccessible.',
        },
      ],
    },
    {
      id: 'section-8',
      num: '8',
      title: 'GDPR Compliance',
      blocks: [
        {
          type: 'p',
          text: 'As a French company (SAS), Spendbaker complies with the General Data Protection Regulation (GDPR). You have the right to access, rectify, or object to the processing of your data.',
        },
      ],
    },
    {
      id: 'section-9',
      num: '9',
      title: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'For any questions regarding this Privacy Policy or your data, please contact:',
        },
        {
          type: 'lines',
          lines: [
            'Spendbaker',
            '7 place de l’adjudant vincennot',
            '75020 Paris, France',
            'Email: contact@spendbaker.com',
            'SIREN: 102 818 408',
          ],
        },
      ],
    },
  ],
};
