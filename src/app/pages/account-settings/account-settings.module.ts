import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings.component';
import { ThemeModule } from '../../@theme/theme.module';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [AccountSettingsComponent, UserInformationComponent],
  imports: [
    ThemeModule,
  ],
})
export class AccountSettingsModule { }
