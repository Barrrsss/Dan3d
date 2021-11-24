import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService) { }
  public item: DataService[] = [];
  ngOnInit(): void {
    console.log(this.dataService.items[0].name)
  }

}
