import { LegalPage, legalMeta } from '~/pages';

export const meta = () => legalMeta('fr');
export default function Route() {
  return <LegalPage lang="fr" />;
}
