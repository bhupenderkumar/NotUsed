import { NgModule } from '@angular/core';
import { NatureSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { PrimeNGCommonModule } from 'app/shared/primeng-common.module';
@NgModule({
  imports: [NatureSharedLibsModule, PrimeNGCommonModule],
  declarations: [FindLanguageFromKeyPipe, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [NatureSharedLibsModule, FindLanguageFromKeyPipe, LoginModalComponent, HasAnyAuthorityDirective, PrimeNGCommonModule]
})
export class NatureSharedModule {}
