'use client';

import * as React from 'react';
import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { X } from 'lucide-react';
import { Toaster, ToasterProps, toast } from 'sonner';
import { SeverityIcon } from '../component/severity-icon';
import { FlexContainer, FloatingContainer } from '../container';
import { Button } from './button';
import { Header } from './header';
import { Paragraph } from './paragraph';

type ToastSeverity = 'success' | 'warning' | 'danger';

type ToastNotificationProps = {
  id: string | number;
  title: string;
  description?: string;
  severity?: ToastSeverity;
  onClose: (id: string | number) => void;
} & Omit<HTMLProps<HTMLDivElement>, 'id'>;

const ToastNotification = forwardRef<HTMLDivElement, ToastNotificationProps>(
  ({ id, title, description, onClose, children, severity = 'success' }, ref) => (
    <FlexContainer
      ref={ref}
      align="center"
      gap="normal"
      className={cn(
        'relative',
        'min-w-full',
        'sm:min-w-[350px]',
        'rounded-xl',
        'bg-white',
        'dark:bg-black',
        'px-4',
        'py-3',
        'shadow-xl',
        'border',
        'border-input'
      )}>
      <SeverityIcon allGood={severity === 'warning' ? null : severity === 'success'} />
      <FlexContainer col>
        <Header headingVariant="h6" font="basic" size="xt" margin="none" className="font-medium">
          {title}
        </Header>
        {description && <Paragraph size="sm">{description}</Paragraph>}
        {children}
      </FlexContainer>
      <FloatingContainer centered="y" className={cn('top-0', 'right-2', 'p-1')}>
        <Button variant="ghost" size="notch" onClick={() => onClose(id)}>
          <X size={15} />
        </Button>
      </FloatingContainer>
    </FlexContainer>
  )
);

const ToastContainer: React.FC<ToasterProps> = ({ ...props }): React.ReactElement => {
  const { toastOptions, ...rest } = props;
  return (
    <Toaster position="bottom-right" toastOptions={{ unstyled: true, ...toastOptions }} {...rest} />
  );
};

type ToastNotificationFcProps = {
  title: string;
  description?: string;
  severity?: ToastSeverity;
  duration?: number;
};

const showToast = ({
  title,
  description,
  severity = 'success',
  duration = 5000,
}: ToastNotificationFcProps) =>
  toast.custom(
    id => (
      <ToastNotification
        id={id}
        title={title}
        description={description}
        severity={severity}
        onClose={id => toast.dismiss(id)}
      />
    ),
    { duration }
  );

ToastNotification.displayName = 'ToastNotification';

export { ToastNotification, ToastContainer, showToast };
