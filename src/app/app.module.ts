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
import { NavComponent } from './nav/nav.component';
import { SupportComponent } from './support/support.component';
import { LoadingComponent } from './loading/loading.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { DriveComponent } from './drive/drive.component';
import { TerminalComponent } from './terminal/terminal.component';
import { LazyLoadDirective } from './lazyload.directive';
import { RemoveSpacesPipe } from './remove-spaces/remove-spaces.pipe';
import { MakeUrlSafePipe } from './make-url-safe/make-url-safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    RemoveSpacesPipe,
    MakeUrlSafePipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
