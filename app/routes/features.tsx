import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('features', 'en');
export default function Route() {
  return <SimplePage page="features" lang="en" />;
}
