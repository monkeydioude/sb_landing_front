import { metaFor, PricingPage, pricingFaqMeta } from '~/pages';

export const meta = () => [...metaFor('pricing', 'fr'), ...pricingFaqMeta('fr')];
export default function Route() {
  return <PricingPage lang="fr" />;
}
