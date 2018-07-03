import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news-com',
  templateUrl: './news-com.component.html',
  styleUrls: ['./news-com.component.css']
})
export class NewsComComponent implements OnInit {

  public msg:any

  @ViewChild('header') header;

  constructor() {
    this.msg="新闻的头部信息"
  }

  ngOnInit() {
  }

  run(){
    alert('这是news的run方法')
  }

  getChildData(childData){ //
    alert('这是父组件的方法,'+ childData)
  }

  outputParent(){
    alert('这个是父组件的方法')
  }
  getChildfun(){
    this.header.child()
    console.log(this.header.datalist);
  }
}
