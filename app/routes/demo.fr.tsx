import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('demo', 'fr');
export default function Route() {
  return <SimplePage page="demo" lang="fr" />;
}
