import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { LoadingComponent } from './loading/loading.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { DriveComponent } from './drive/drive.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SupportComponent,
    LoadingComponent,
    ProfileComponent,
    UserComponent,
    SettingsComponent,
    DriveComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'blazed.us.auth0.com',
      clientId: '9udFBRRg3jyT30vfIzYFtkTrZBQff9tM'
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
