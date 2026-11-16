import { DemoPage, metaFor } from '~/pages';

export const meta = () => metaFor('demo', 'en');
export default function Route() {
  return <DemoPage lang="en" />;
}
