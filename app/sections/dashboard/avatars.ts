import amir from '~/assets/photos/avatar-amir.webp';
import clara from '~/assets/photos/avatar-clara.webp';
import marcus from '~/assets/photos/avatar-marcus.webp';
import mei from '~/assets/photos/avatar-mei.webp';
import nadia from '~/assets/photos/avatar-nadia.webp';
import priya from '~/assets/photos/avatar-priya.webp';

/**
 * Demo users of the dashboard mock-up. The portraits are AI-generated illustrations and the names are
 * invented: they stand for the people in a team, not for real employees or customers. 72px files shown at 28px.
 */
export const PEOPLE: Record<string, { name: string; src: string }> = {
  clara: { name: 'Clara M.', src: clara },
  amir: { name: 'Amir K.', src: amir },
  priya: { name: 'Priya S.', src: priya },
  marcus: { name: 'Marcus T.', src: marcus },
  nadia: { name: 'Nadia R.', src: nadia },
  mei: { name: 'Mei L.', src: mei },
};
