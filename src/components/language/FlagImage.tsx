/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Image, { StaticImageData } from 'next/image';
import enFlag from '@/assets/flag/en.png';
import plFlag from '@/assets/flag/pl.png';
import { Language } from '@/i18n/config';

const flagImages: Record<Language, StaticImageData> = {
  en: enFlag,
  pl: plFlag,
};

type Props = {
  lang: Language;
};

const FlagImage: React.FC<Props> = ({ lang }): JSX.Element => (
  <Image src={flagImages[lang]} width={20} height={13} alt={lang} />
);

export default FlagImage;
