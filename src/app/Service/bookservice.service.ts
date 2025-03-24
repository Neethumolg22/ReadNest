import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
interface Book {
  id: number;
  title: string;
  category: string;
}
@Injectable({
  providedIn: 'root'
})


export class BookserviceService {

  getBooks(): Observable<Book[]> {
    const mockBooks: Book[] = [
      { id: 1, title: 'Angular Mastery', category: 'Programming' },
      { id: 2, title: 'RxJS Deep Dive', category: 'Technology' },
      { id: 3, title: 'The Art of Microservices', category: 'Software Architecture' }
    ];
    return of(mockBooks);
  }
}