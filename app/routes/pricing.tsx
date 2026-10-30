import { metaFor, PricingPage, pricingFaqMeta } from '~/pages';

export const meta = () => [...metaFor('pricing', 'en'), ...pricingFaqMeta('en')];
export default function Route() {
  return <PricingPage lang="en" />;
}
