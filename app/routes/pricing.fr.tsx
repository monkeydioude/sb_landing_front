import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('pricing', 'fr');
export default function Route() {
  return <SimplePage page="pricing" lang="fr" />;
}
