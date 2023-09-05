import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./modules/client/pages/homepage/homepage.module').then(
  //       (m) => m.HomepageModule
  //     ),
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'create_account',
    loadChildren: () =>
      import('./core/components/create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
