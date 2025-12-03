import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';
import { Career } from './career/career';
import { Contact } from './contact/contact';
import { MarketDevelopment } from './market-development/market-development';
import { BusinessPlanning } from './business-planning/business-planning';
import { BrandMarketing } from './brand-marketing/brand-marketing';
import { OperationsSetup } from './operations-setup/operations-setup';
import { TechInfrastructure } from './tech-infrastructure/tech-infrastructure';
import { Recruitment } from './recruitment/recruitment';
import { LaunchGrowth } from './launch-growth/launch-growth';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: AboutUs,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'career',
    component: Career,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'marketDevelopment',
    component: MarketDevelopment,
  },
  {
    path: 'businessPlanning',
    component: BusinessPlanning,
  },
  {
    path: 'brandMarketing',
    component: BrandMarketing,
  },
  {
    path: 'operationSetup',
    component: OperationsSetup,
  },
  {
    path: 'technologyInfraStructure',
    component: TechInfrastructure,
  },
  {
    path: 'recruitment',
    component: Recruitment,
  },
  {
    path: 'launchGrowth',
    component: LaunchGrowth,
  },
];
