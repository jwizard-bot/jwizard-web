/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { OverflowGradient } from '@/component/third-party-software/overflow-gradient';
import { getServerQuery } from '@/query';
import { ProjectPackageRow } from '@/query/type/project-packages';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, FloatingContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { InteractiveLibraries } from '../interactive-libraries';

const LibrariesContainerSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: projectPackages } = await getServerQuery<ProjectPackageRow[]>({
    queryString: '/v1/packages/all',
    errorMessage: 'Unable to fetch project packages.',
  });

  return (
    <FlexContainer
      fullWidth
      justify="center"
      className={cn('bg-slate-950', 'text-slate-200', 'font-pixelated')}>
      <SafetyContainer
        spaceUp="none"
        spaceBelow="none"
        fullSizeChild
        className={cn('h-[800px]', 'overflow-hidden')}>
        <div className={cn('relative', 'top-0', 'w-full', 'h-full', 'text-slate-600')}>
          <OverflowGradient position="top" />
          <FloatingContainer
            alignmentX="left"
            alignmentY="top"
            className="w-[calc(100%-14px)]"
            zIndex={11}>
            <FlexContainer justify="center" align="end" fullWidth fullHeight>
              <p className={cn('text-2xl', 'text-slate-300')}>
                {t('currentlyUsed', { count: projectPackages.length })}
                <span className="animate-ping">_</span>
              </p>
            </FlexContainer>
          </FloatingContainer>
          <FloatingContainer
            className={cn(
              'right-[0.18rem]',
              'top-[10px]',
              'w-[0.09rem]',
              'h-[calc(100%-20px)]',
              'bg-slate-900'
            )}
            zIndex={0}
          />
          <InteractiveLibraries>
            {projectPackages.map(({ name, link }) => (
              <li key={name} className={cn('flex', 'sm:odd:justify-end', 'sm:even:justify-start')}>
                <OuterLink to={link} className={cn('truncate', 'hover:text-slate-300', 'text-xl')}>
                  {name}
                </OuterLink>
              </li>
            ))}
          </InteractiveLibraries>
          <OverflowGradient position="bottom" />
        </div>
      </SafetyContainer>
    </FlexContainer>
  );
};

export { LibrariesContainerSection };
