
// input是一种子组件执行父组件的方法
// output,EventEmitter是另一种子组件执行父组件的方法
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-com',
  templateUrl: './header-com.component.html',
  styleUrls: ['./header-com.component.css']
})
export class HeaderComComponent implements OnInit {

  @Input() msgcom:any;
  @Input() run:any;
  @Input() getChildData:any;
  public dataChild:any
  public datalist:any

  @Output() private outer=new EventEmitter<string>()

  constructor() { 
    this.dataChild='子组件执行了父组件的方法';
    this.datalist='子组件的datalist'
   }

  ngOnInit() {
  }

  childfun(){
    this.getChildData(this.dataChild)
  }

  outputfun(){
    this.outer.emit('这个是子组件的emit信息')
  }

  //子组件的方法
  child(){
    alert('这是子组件的方法')
  }
}
