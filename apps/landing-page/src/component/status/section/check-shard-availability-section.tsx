'use client';

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useClientQuery } from '@/query/client';
import { InstanceOption } from '@/query/type/instance-option';
import { OptionsResult } from '@/query/type/options-result';
import { ShardCheckResDto } from '@/query/type/shard-check';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Alert } from '@jwizard-web/ui/widget/alert';
import { Button } from '@jwizard-web/ui/widget/button';
import { Input, InputContainer } from '@jwizard-web/ui/widget/input';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@jwizard-web/ui/widget/select';

type Props = {
  instanceOptions: OptionsResult<InstanceOption>;
};

const CheckShardAvailabilitySection: React.FC<Props> = ({
  instanceOptions,
}): React.ReactElement => {
  const t = useTranslations();
  const locale = useLocale();

  const [instance, setInstance] = useState(instanceOptions.defaultOption.id.toString());
  const [guildNameOrId, setGuildNameOrId] = useState('');
  const { apiCall, running, error, clearError } = useClientQuery<unknown, ShardCheckResDto>();
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  const selectedInstanceDefinition = useMemo(
    () => instanceOptions.options.find(({ id }) => id.toString() === instance),
    [instance, locale]
  );

  const handleCheckAvailability = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (guildNameOrId.length === 0) {
      return;
    }
    (async () => {
      const { response } = await apiCall({
        queryString: '/v1/status/shard/up',
        queryParams: { guild: guildNameOrId, instanceId: instance },
      });
      setStatus(response?.status);
    })();
  };

  useEffect(() => {
    clearError();
    setStatus(undefined);
  }, [instance, guildNameOrId]);

  return (
    <SafetyContainer>
      <FlexContainer col gap="normal">
        <Paragraph size="md">{t('description')}</Paragraph>
        <Paragraph size="md">
          {t('disclaimerInfo')}{' '}
          <OuterLink
            to="mailto:issues@jwizard.pl"
            newPage={false}
            className={cn('underline', 'hover:no-underline', 'text-primary', 'font-medium')}>
            issues@jwizard.pl
          </OuterLink>
          .
        </Paragraph>
      </FlexContainer>
      <form onSubmit={handleCheckAvailability}>
        <FlexContainer gap="normal" justify="between" toColOnSmallDevices className="my-8">
          <FlexContainer gap="small" fullWidthOnSmallDevices>
            <InputContainer className="w-full">
              <Input
                value={guildNameOrId}
                onChange={e => setGuildNameOrId(e.target.value)}
                placeholder={t('inputPlaceholder')}
                disabled={running}
                opaque
                className="w-full md:w-[400px]"
              />
            </InputContainer>
            <Button spinner={running}>{t('check')}</Button>
          </FlexContainer>
          <FlexContainer className="w-full sm:w-[200px]">
            <Select value={instance} onValueChange={setInstance}>
              <SelectTrigger opaque className="w-fit" disabled={running}>
                <SelectValue>{selectedInstanceDefinition?.name}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {instanceOptions.options.map(({ id, name }) => (
                  <SelectItem key={id} value={id.toString()}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FlexContainer>
        </FlexContainer>
      </form>
      <FlexContainer>
        {error && <Alert variant="danger">{error}</Alert>}
        {!error && status === true && <Alert variant="success">{t('isAvailable')}</Alert>}
        {!error && status === false && <Alert variant="warning">{t('isUnavailable')}</Alert>}
      </FlexContainer>
    </SafetyContainer>
  );
};

export { CheckShardAvailabilitySection };
