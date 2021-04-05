import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '',
              component: ShellComponent,
              children: [
                  { path: 'welcome', component: WelcomeComponent },
                  {
                      path: 'clip',
                      loadChildren: () => import('./clip/clip.module').then(cl => cl.ClipModule)
                  },
                  {
                    path: 'my-list',
                    loadChildren: () => import('./my-list/my-list.module').then(my => my.MyListModule)
                  },
                  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
              ]
          },
          { path: '**', component: PageNotFoundComponent }
      ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
