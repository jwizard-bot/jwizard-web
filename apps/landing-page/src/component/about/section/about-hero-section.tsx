import * as React from 'react';
import { CountableStatsCard } from '@/component/countable-stats-card';
import { getServerQuery } from '@/query';
import { CombinedAnalyzerStatisticsResDto } from '@/query/type/combined-analyzer-statistics';
import { cn } from '@jwizard-web/lib/util';
import { GridContainer, SafetyContainer } from '@jwizard-web/ui/container';

const AboutHeroSection: React.FC = async (): Promise<React.ReactElement> => {
  const { data: combinedAnalyzerStatistics } =
    await getServerQuery<CombinedAnalyzerStatisticsResDto>({
      queryString: '/v1/analyzer/combined',
      errorMessage: 'Unable to fetch combined analyzer statistics.',
    });

  return (
    <SafetyContainer>
      <GridContainer cols={1} fullWidth gap={4} className={cn('sm:grid-cols-2', 'lg:grid-cols-4')}>
        {Object.keys(combinedAnalyzerStatistics).map(key => (
          <CountableStatsCard
            key={key}
            countableValue={
              combinedAnalyzerStatistics[key as keyof typeof combinedAnalyzerStatistics]
            }
            i18nDescription={key}
            numberSize="md"
          />
        ))}
      </GridContainer>
    </SafetyContainer>
  );
};

export { AboutHeroSection };
