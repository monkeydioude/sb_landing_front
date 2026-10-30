import type { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaLinkedin, FaSlack } from 'react-icons/fa';
import { SiClaude, SiG2, SiGoogleads } from 'react-icons/si';
import { TbBrandBing } from 'react-icons/tb';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';
import { SectionHeading } from './SectionHeading';

// Brand logos in their brand colours, in the same order as `integrations.items` in content.
// (Slack is shown in its pink accent: the aubergine brand colour disappears on the dark theme.)
const LOGOS: { Icon: IconType; color: string }[] = [
  { Icon: SiGoogleads, color: '#4285F4' },
  { Icon: FaInstagram, color: '#E4405F' },
  { Icon: FaFacebook, color: '#1877F2' },
  { Icon: FaLinkedin, color: '#0A66C2' },
  { Icon: SiG2, color: '#FF492C' },
  { Icon: FaSlack, color: '#E01E5A' },
  { Icon: SiClaude, color: '#D97757' },
  { Icon: TbBrandBing, color: '#008373' },
];

export function Integrations({ t }: { t: Home['integrations'] }) {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={t.title} />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-14">
          {t.items.map((name, i) => {
            const { Icon, color } = LOGOS[i];
            return (
              <li
                key={name}
                className="flex flex-col items-center gap-3 rounded-2xl border bg-card px-4 py-8 shadow-sm"
              >
                <Icon className="size-10" style={{ color }} aria-hidden />
                <span className="text-sm font-bold">{name}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
