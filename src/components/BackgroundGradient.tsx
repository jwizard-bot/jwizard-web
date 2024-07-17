/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import Image from 'next/image';

type GradientElement = {
  fileName: string;
  styles: string;
  width: number;
  height: number;
};

const gradientElements: GradientElement[] = [
  {
    fileName: 'left.png',
    styles: '-bottom-[30%] -left-[20%]',
    width: 1266,
    height: 1211,
  },
  {
    fileName: 'right.png',
    styles: '-top-[60%] -right-[45%] rotate-12',
    width: 1866,
    height: 1822,
  },
];

const BackgroundGradient: React.FC = (): JSX.Element => (
  <>
    {gradientElements.map(({ fileName, styles, width, height }) => (
      <div
        key={fileName}
        className={clsx('fixed opacity-30 dark:opacity-60', styles)}>
        <Image
          src={`/bg/${fileName}`}
          className="shadow-black/5 shadow-none rounded-large"
          alt=""
          width={width}
          height={height}
        />
      </div>
    ))}
  </>
);

export default BackgroundGradient;
