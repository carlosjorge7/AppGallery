import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PhotoListComponent } from './componentes/photo-list/photo-list.component';
import { PhotoFormComponent } from './componentes/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './componentes/photo-preview/photo-preview.component';


const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
