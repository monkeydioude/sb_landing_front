import { metaFor, SimplePage } from '~/pages';

export const meta = () => metaFor('demo', 'en');
export default function Route() {
  return <SimplePage page="demo" lang="en" />;
}
