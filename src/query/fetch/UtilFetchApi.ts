/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { AxiosInstance } from 'axios';
import { ContributorsDataResDto } from '../types/util/contributor';
import { KeyFeatureResDto } from '../types/util/key-features';
import { StatsInfoResDto } from '../types/util/stats';

class UtilFetchApi {
  constructor(private readonly instance: AxiosInstance) {}

  async getContributors(): Promise<ContributorsDataResDto> {
    return (await this.instance.get('/api/v1/contributor/all')).data;
  }

  async getStats(): Promise<StatsInfoResDto> {
    return (await this.instance.get('/api/v1/home/stats')).data;
  }

  async getKeyFeatures(): Promise<KeyFeatureResDto[]> {
    return (await this.instance.get('/api/v1/home/key-features')).data;
  }
}

export default UtilFetchApi;
