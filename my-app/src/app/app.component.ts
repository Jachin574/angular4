import { Component } from '@angular/core';  //引入Angular Component

@Component({
  selector: 'app-root', //表示使用这个组件的名称
  templateUrl: './app.component.html',  //html
  styleUrls: ['./app.component.css']  //css
})
export class AppComponent { //定义数据
  title = 'app';
  name='Jachin'
  age='24'
  a='header a'
}
