'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import {
  removeSnackbar,
  useSnackbarSelector,
} from '@/store/slices/snackbar-slice';
import { SnackbarSeverity } from '@/types/snackbar';
import { Tooltip } from '@nextui-org/react';
import Motion from './motion';
import Ui from './ui';

const snackbarStyle: Record<SnackbarSeverity, string> = {
  success: clsx(
    'bg-snackbar-success',
    'dark:bg-snackbar-success-dark',
    'text-success-700'
  ),
  warning: clsx(
    'bg-snackbar-warning',
    'dark:bg-snackbar-warning-dark',
    'text-warning-700'
  ),
  danger: clsx(
    'bg-snackbar-danger',
    'dark:bg-snackbar-danger-dark',
    'text-danger-700'
  ),
};

type Props = {
  maxPlaceholders?: number;
};

const SnackbarStack: React.FC<Props> = ({
  maxPlaceholders = 4,
}): JSX.Element => {
  const { snackbarStack } = useSnackbarSelector();
  const dispatch = useDispatch();
  const t = useTranslations();

  const closeSnackbar = (id: string): void => {
    dispatch(removeSnackbar({ id }));
  };

  return (
    <Ui.FloatingContainer
      mode="fixed"
      centered="x"
      alignmentY="bottom"
      zIndex={100}>
      <AnimatePresence>
        {snackbarStack.map(({ id, text, severity }, i) => (
          <Motion.SlideMotionElement
            key={id}
            animate={(i > maxPlaceholders - 1 ? maxPlaceholders - 1 : i) * 10}
            immutableProperties={{ x: '-50%' }}
            mutableProperties={{ scale: 1 - i * 0.1 }}
            className={clsx(
              'absolute',
              'bottom-8',
              'left-[50%]',
              'w-[500px]',
              'p-2',
              'px-8',
              'rounded-xl',
              'text-sm',
              'shadow-sm',
              'dark:shadow-md',
              snackbarStyle[severity]
            )}
            style={{ zIndex: 100 - i }}>
            <div className="text-center">{text}</div>
            <Ui.FloatingContainer
              mode="absolute"
              centered="y"
              className="right-2">
              <Ui.FlexContainer align="center">
                <Tooltip content={t('close')}>
                  <button onClick={() => closeSnackbar(id)}>
                    <IoMdClose size={18} />
                  </button>
                </Tooltip>
              </Ui.FlexContainer>
            </Ui.FloatingContainer>
          </Motion.SlideMotionElement>
        ))}
      </AnimatePresence>
    </Ui.FloatingContainer>
  );
};

export default SnackbarStack;
