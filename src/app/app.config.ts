import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamService } from './services/exam.service';
import { PlanificationService } from './services/planification.service';
import { SujetService } from './services/sujet.service';
import { QcmService } from './services/qcm.service';
import { CalendarService } from './services/calendar.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(BrowserModule, FullCalendarModule, HttpClientModule, BrowserAnimationsModule, ExamService, FormsModule, ReactiveFormsModule, PlanificationService, SujetService, QcmService, CalendarService)
  ]
};
