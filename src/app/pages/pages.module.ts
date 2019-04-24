import { NgModule } from '@angular/core';

import { AccountSettingsModule } from './account-settings/account-settings.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StudentsModule } from './students/students.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    AccountSettingsModule,
    DashboardModule,
    PagesRoutingModule,
    MiscellaneousModule,
    StudentsModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
