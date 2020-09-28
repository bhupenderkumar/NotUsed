import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { NatureSharedModule } from 'app/shared/shared.module';
import { NatureCoreModule } from 'app/core/core.module';
import { NatureAppRoutingModule } from './app-routing.module';
import { NatureHomeModule } from './home/home.module';
import { NatureEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NatureSharedModule,
    NatureCoreModule,
    NatureHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NatureEntityModule,
    NatureAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class NatureAppModule {}
