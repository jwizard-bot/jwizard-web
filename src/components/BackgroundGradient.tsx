/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';

type GradientElement = {
  fileName: string;
  styles: string;
};

const gradientElements: GradientElement[] = [
  {
    fileName: 'left.png',
    styles: '-bottom-[30%] -left-[20%]',
  },
  {
    fileName: 'right.png',
    styles: '-top-[60%] -right-[45%] rotate-12',
  },
];

const BackgroundGradient: React.FC = (): JSX.Element => (
  <>
    {gradientElements.map(({ fileName, styles }) => (
      <div
        key={fileName}
        className={clsx('fixed opacity-30 dark:opacity-60', styles)}>
        <img
          src={`/bg/${fileName}`}
          className="shadow-black/5 shadow-none rounded-large"
        />
      </div>
    ))}
  </>
);

export default BackgroundGradient;
