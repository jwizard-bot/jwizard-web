/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Image from 'next/image';
import { Language } from '@/i18n/config';

type Props = {
  lang: Language;
};

const FlagImage: React.FC<Props> = ({ lang }): JSX.Element => (
  <Image src={`/flag/${lang}.png`} width={20} height={20} alt={lang} />
);

export default FlagImage;
