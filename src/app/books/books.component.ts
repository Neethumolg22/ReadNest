import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule, RouterModule], // ✅ Import Angular Modules
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit  {
  
  constructor(
   
    private router: Router,
  ) { }

  ngOnInit() {
   
  }

  oncancel()
  {
    this.router.navigate(["/dashboard"]);
  }
}
