import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationLogListComponent } from './notification-log-list/notification-log-list.component';
import { NotificationLogService } from './notification-log.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationLogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    NotificationLogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
