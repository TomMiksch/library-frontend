import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookString = ''

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  getBook() {
    this.bookService.getBook().subscribe(value => {
      console.log('Value: ' + value.text)
      this.bookString = value.text;
    });
  }
}
