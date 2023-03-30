import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PooComponent } from './pages/poo/poo.component';
import { FeedingComponent } from './pages/feeding/feeding.component';
import { VaccinateComponent } from './pages/vaccinate/vaccinate.component';
import { FrontComponent } from './pages/front/front.component';
import { CreatePooComponent } from './pages/create-poo/create-poo.component';
import { CreateFeedingComponent } from './pages/create-feeding/create-feeding.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { CreateAppointmentsComponent } from './pages/create-appointments/create-appointments.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ShowPooComponent } from './pages/show-poo/show-poo.component';
import { ShowAppointmentComponent } from './pages/show-appointment/show-appointment.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PooComponent,
    FeedingComponent,
    VaccinateComponent,
    FrontComponent,
    CreatePooComponent,
    DateFormatPipe,
    TranslatePipe,
    CreateFeedingComponent,
    AppointmentsComponent,
    CreateAppointmentsComponent,
    EditProfileComponent,
    ShowPooComponent,
    ShowAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
