import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('contact', 'fr');
export default function Route() {
  return <SimplePage page="contact" lang="fr" />;
}
