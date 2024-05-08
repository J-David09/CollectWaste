import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { GarbageCollectionComponent } from './pages/garbage-collection/garbage-collection.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FollowupComponent } from './pages/followup/followup.component';
import {MatStepperModule} from '@angular/material/stepper';
import { LoginComponent } from './security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GarbageCollectionComponent,
    TermsConditionsComponent,
    AboutusComponent,
    FollowupComponent,
    LoginComponent,
    AdminHomeComponent,
    HeaderComponent,
    SolicitudesComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
