import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',   //header组件的名字
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public a=''
  constructor() { }
  ngOnInit() {
    this.a='this is header a'
  }

}
