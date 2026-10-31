import { HomePage, metaFor } from '~/pages';

export const meta = () => metaFor('home', 'en');
export default function Route() {
  return <HomePage lang="en" />;
}
