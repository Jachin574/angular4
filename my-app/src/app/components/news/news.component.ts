import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public student:string='张三';
  public a='';
  public arr = ['第一条数组数据','第二条数组数据','第三条数组数据']
  public arr2:any[] //一个数组内容展示
  public arr3:any[] //json数组展示
  public arr4:any[] //多维数组展示

  constructor() { 
    console.log(this)
    this.a ="<a href='javascript:;'>这是一个超链接</a>";
    this.arr2=['数学','物理','化学']
    this.arr3=[
      {'title':'第一个标题'},
      {'title':'第二个标题'},
      {'title':'第三个标题'}
    ]
    this.arr4=[
      {
        'carname':'BMW',
        'list':[
          {'title':'BMWx1'},
          {'title':'BMWx2'},
          {'title':'BMWx3'},
          {'title':'BMWx4'}
        ]
      },{
        'carname':'Audi',
        'list':[
          {'title':'AudiQ1'},
          {'title':'AudiQ2'},
          {'title':'AudiQ3'},
          {'title':'AudiQ4'}
        ]
      }
    ]
  }

  ngOnInit() {
  }


}
