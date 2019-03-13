import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tags';
  isError = false;
  items: Tags[];

  constructor(private http: HttpClient) {
    this.http.get('assets/tags.json').subscribe(
      (items: Tags[]) => { this.items = items; },
      error => this.isError = true);
  }

}

interface Tags {
  text: string;
  size: number;
}