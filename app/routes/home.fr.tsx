import { HomePage, metaFor } from '~/pages';

export const meta = () => metaFor('home', 'fr');
export default function Route() {
  return <HomePage lang="fr" />;
}
