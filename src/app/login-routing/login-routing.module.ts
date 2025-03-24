import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';  // ✅ Import this
import { SignuppageComponent } from '../signuppage/signuppage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BooksComponent } from '../books/books.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // Default Home Page
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignuppageComponent }, 
{ path: 'dashboard', component: DashboardComponent },  
{ path: 'book', component: BooksComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes
];

export const appRouting = provideRouter(appRoutes);
