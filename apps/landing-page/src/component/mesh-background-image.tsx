/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import meshBgGradient from '@jwizard-web/assets/bg/mesh.png';
import { cn } from '@jwizard-web/lib/util';

const MeshBackgroundImage: React.FC = (): React.ReactElement => (
  <img
    src={meshBgGradient}
    className={cn(
      'absolute',
      'top-20',
      'sm:top-0',
      'right-[50%]',
      'translate-x-[50%]',
      'w-full',
      'sm:w-[900px]',
      'opacity-15',
      '-z-[1]'
    )}
    alt=""
  />
);

export { MeshBackgroundImage };
