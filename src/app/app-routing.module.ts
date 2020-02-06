import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'order-create',
    loadChildren: () => import('./pages/order-create/order-create.module').then( m => m.OrderCreatePageModule)
  },
  {
    path: 'order-confirm',
    loadChildren: () => import('./pages/order-confirm/order-confirm.module').then( m => m.OrderConfirmPageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./pages/add-person/add-person.module').then( m => m.AddPersonPageModule)
  },
  {
    path: 'person-details',
    loadChildren: () => import('./pages/person-details/person-details.module').then( m => m.PersonDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
