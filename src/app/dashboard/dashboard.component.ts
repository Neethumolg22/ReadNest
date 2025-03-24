import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookserviceService } from '../Service/bookservice.service';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule, RouterModule], // ✅ Import Angular Modules
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit  {
  book:any;
  books = [
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/4.jpg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/1.jpeg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/1.jpeg' },
    { image: 'assets/images/4.jpg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/harip.jpg' },
    { image: 'assets/images/harip.jpg' }
  ];

  // ✅ Using inject() instead of constructor-based DI
  private bookService = inject(BookserviceService);
  private router = inject(Router);

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.book = data;
    });
  }
  
  onclick(){
    this.router.navigate(["/book"]);
  }
}

