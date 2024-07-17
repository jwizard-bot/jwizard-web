/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Image from 'next/image';

const MeshBackgroundImage: React.FC = (): JSX.Element => (
  <Image
    src="/bg/mesh.png"
    className="absolute top-20 sm:top-0 right-[50%] translate-x-[50%] w-full sm:w-[900px] opacity-15 -z-[1]"
    width={1766}
    height={1700}
    alt=""
  />
);

export default MeshBackgroundImage;
