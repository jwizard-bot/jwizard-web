/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Image from 'next/image';
import meshBgGradient from '@/assets/bg/mesh.png';

const MeshBackgroundImage: React.FC = (): JSX.Element => (
  <Image
    src={meshBgGradient}
    className="absolute top-20 sm:top-0 right-[50%] translate-x-[50%] w-full sm:w-[900px] opacity-15 -z-[1]"
    alt=""
  />
);

export default MeshBackgroundImage;
