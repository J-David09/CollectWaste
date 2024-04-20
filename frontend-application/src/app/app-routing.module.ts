import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GarbageCollectionComponent } from './pages/garbage-collection/garbage-collection.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'garbage', component: GarbageCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
