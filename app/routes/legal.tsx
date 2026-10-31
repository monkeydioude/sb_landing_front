import { LegalPage, legalMeta } from '~/pages';

export const meta = () => legalMeta('en');
export default function Route() {
  return <LegalPage lang="en" />;
}
