import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  bookKey=environment.Books_Api_key;
  BookResults =new Subject();
 

  constructor(private http:HttpClient) { }
  getResults():Observable<any>{
    return this.http
    .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.bookKey}`,
   
    )}
  passResults(results:any):void{
    this.BookResults.next(results);
  }
  getPassedResults():Observable<any>{
    return this.BookResults.asObservable();
  }
}
