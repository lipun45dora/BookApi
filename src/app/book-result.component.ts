import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.css']
})
export class BookResultComponent implements OnInit {
  bookresults:any[]=[];
  buyLink:any[]=[];
  count=0;
   constructor(private bookService:BookService) { }
 
   ngOnInit(): void {
     this.bookService.getPassedResults().subscribe((response:any)=>{
       this.bookresults=response.results.books;
      // this.results=response;
        this.count=response.results.books.length;
       
        
       console.log('Results and count', this.bookresults,this.count);
       //console.log(this.bookresults);
    },
    (error:any)=>{
      console.log('Error Occured',error);
    })
   }
 

}
