import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './component/layouts/main-module/main-module.component';
import { HomeComponent } from './component/views/home/home.component';
import { getTabTitle, PageTitles } from './config/seo.config';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [{
    path: '', component: MainModuleComponent, children: [
       // ------------------- //
      //        MAIN
      // ------------------- //
      {path: 'home', title: getTabTitle(PageTitles.HOME), component: HomeComponent},
      
      // ------------------- //
      // CONFIGS
      // ------------------- //
      { path: '', redirectTo: 'home', pathMatch: 'full' },
  ]
},
/**
   * =========================
   * ERROR WILDCARD ROUTING
   * =========================
   */
 { path: '**', component: NotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
