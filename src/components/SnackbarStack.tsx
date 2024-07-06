/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeSnackbar } from '@/store/ui-store/actions';
import { useUiStoreReducer } from '@/store/ui-store/selectors';
import { SnackbarSeverity } from '@/types/snackbar';
import { Tooltip } from '@nextui-org/react';
import Ui from './ui';

const initAnimationState = {
  opacity: 0,
  y: 50,
  x: '-50%',
};

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
  const { snackbarStack } = useUiStoreReducer();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const closeSnackbar = (id: string): void => {
    dispatch(removeSnackbar({ id }));
  };

  return (
    <Ui.FloatingContainer
      mode="fixed"
      centered="x"
      className="bottom-0 z-[100]">
      <AnimatePresence>
        {snackbarStack.map(({ id, text, severity }, i) => (
          <motion.div
            key={id}
            initial={initAnimationState}
            animate={{
              ...initAnimationState,
              opacity: 1,
              y: (i > maxPlaceholders ? maxPlaceholders : i) * 10,
              scale: 1 - i * 0.1,
            }}
            exit={initAnimationState}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 100 - i }}
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
            )}>
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
          </motion.div>
        ))}
      </AnimatePresence>
    </Ui.FloatingContainer>
  );
};

export default SnackbarStack;
