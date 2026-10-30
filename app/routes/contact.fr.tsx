import { ContactPage, metaFor } from '~/pages';

export const meta = () => metaFor('contact', 'fr');
export default function Route() {
  return <ContactPage lang="fr" />;
}
