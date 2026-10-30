import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('features', 'fr');
export default function Route() {
  return <SimplePage page="features" lang="fr" />;
}
