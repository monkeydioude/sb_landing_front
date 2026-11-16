import { DemoPage, metaFor } from '~/pages';

export const meta = () => metaFor('demo', 'fr');
export default function Route() {
  return <DemoPage lang="fr" />;
}
