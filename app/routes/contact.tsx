import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('contact', 'en');
export default function Route() {
  return <SimplePage page="contact" lang="en" />;
}
