

import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template';
import { BackToTopDirective } from './directives/back-to-top.directive';
import { UtilsService } from './utils/utils.service';
import { MenuItemsDirective } from './directives/menu-items.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BackToTopDirective,
    MenuItemsDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UtilsService],
  bootstrap: [TemplateComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
