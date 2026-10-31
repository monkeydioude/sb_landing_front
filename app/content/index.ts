import type { Lang } from '~/site';
import { en } from './en';
import { fr } from './fr';
import type { Content } from './types';

export const content: Record<Lang, Content> = { en, fr };
