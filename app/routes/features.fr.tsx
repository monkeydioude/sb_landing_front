import { FeaturesPage, metaFor } from '~/pages';

export const meta = () => metaFor('features', 'fr');
export default function Route() {
  return <FeaturesPage lang="fr" />;
}
