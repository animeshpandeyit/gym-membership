import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { authGuard } from 'src/app/core/services/guards/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        canActivate: [authGuard],
        loadChildren: () =>
          import('../client/pages/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
