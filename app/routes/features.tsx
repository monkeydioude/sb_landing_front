import { FeaturesPage, metaFor } from '~/pages';

export const meta = () => metaFor('features', 'en');
export default function Route() {
  return <FeaturesPage lang="en" />;
}
