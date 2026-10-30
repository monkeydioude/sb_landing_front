import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('pricing', 'en');
export default function Route() {
  return <SimplePage page="pricing" lang="en" />;
}
