import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg:any
  public name:any
  public flag:boolean
  public inputData:any

  constructor() { 
    this.msg="这是一个首页组件"
    this.name='sherry'
    this.flag=true
    this.inputData='2018'
  }
  ngOnInit() {
  }
  getMsg(){
    alert(this.msg)
  }
  setName(){
    this.name='Jachin'
  }
  keyupFn(e){
    console.log(e);
    e.keyCode==13 && alert('你按了回车');
    e.keyCode==49 && alert('你按了1');
  }
  getInput(){
    alert(this.inputData)
  }
}
