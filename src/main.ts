import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/login-routing/login-routing.module';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]
}).catch(err => console.error(err));
