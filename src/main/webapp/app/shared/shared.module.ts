import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NatureSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NatureSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NatureSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NatureSharedModule {
  static forRoot() {
    return {
      ngModule: NatureSharedModule
    };
  }
}
