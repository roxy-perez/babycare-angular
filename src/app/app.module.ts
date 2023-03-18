import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
