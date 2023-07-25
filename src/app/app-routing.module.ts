import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AboutComponent }  from './pages/about';
import { ArticlesComponent }  from './pages/articles';
import { ContactComponent }  from './pages/contact';
import { EventComponent }  from './pages/events';
import { HomeComponent }  from './pages/home';
import { ServiceComponent }  from './pages/services';
import { TemplateComponent }  from './template';
import { PageNotFound }  from './PageNotFound';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path:'home',
      component:HomeComponent
  },
  {
      path:'about',
      component:AboutComponent
  },
  {
      path:'article',
      component:ArticlesComponent
  },
  {
      path:'contact',
      component:ContactComponent    
  },
  {
      path:'event',
      component:EventComponent
  },
  {
      path:'service',
      component:ServiceComponent
  },
  { path: '**', component: PageNotFound }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
