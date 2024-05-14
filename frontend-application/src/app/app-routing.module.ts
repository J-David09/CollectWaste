import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GarbageCollectionComponent } from './pages/garbage-collection/garbage-collection.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FollowupComponent } from './pages/followup/followup.component';
import { LoginComponent } from './security/login/login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { MisSolicitudesComponent } from './pages/mis-solicitudes/mis-solicitudes.component';

const routes: Routes = [
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'solicitudes', component: SolicitudesComponent},
  { path: 'misSolicitudes', component: MisSolicitudesComponent},
  { path: 'parametros', component: ParametrosComponent},
  { path: 'home', component: HomeComponent },
  { path: 'garbage', component: GarbageCollectionComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'followup', component: FollowupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
