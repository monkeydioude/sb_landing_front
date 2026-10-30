import { ContactPage, metaFor } from '~/pages';

export const meta = () => metaFor('contact', 'en');
export default function Route() {
  return <ContactPage lang="en" />;
}
