import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})
export class FindBookComponent implements OnInit {
  constructor(
    private bookService:BookService
  ) { }

  ngOnInit(): void {
  }
  searchWeb():void{
    //if(this.searchTerm === '')return;
    this.bookService.getResults().subscribe(
      (response:any)=>{
      this.bookService.passResults(response)
     //this.searchService.passResults({results:response.response.docs,count:response.response.length});
    },
    (error:any)=>{
      console.log('Error Occured',error);
    }
    );
  }

}
