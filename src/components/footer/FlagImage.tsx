/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Language } from '@/i18n';
import { Image } from '@nextui-org/react';

type Props = {
  lang: Language;
};

const FlagImage: React.FC<Props> = ({ lang }): JSX.Element => (
  <Image src={`/flag/${lang}.png`} width={20} height={20} radius="none" />
);

export default FlagImage;
