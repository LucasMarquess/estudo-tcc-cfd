import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CfdGraphicComponent } from './cfd-graphic/cfd-graphic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
  {
    path: '',
    component: AppComponent,
    data: {
        showChildrenInMenu: true
    },
    children: [
        {
            path: 'home',
            component: CfdGraphicComponent,
            data: {
                showInMenu: true,
                title: 'CFD Estudo',
                icon: 'fad fa-home'
            }
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
