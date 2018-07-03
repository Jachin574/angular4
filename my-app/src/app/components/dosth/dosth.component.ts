import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';//引入服务

@Component({
  selector: 'app-dosth',
  templateUrl: './dosth.component.html',
  styleUrls: ['./dosth.component.css']
})
export class DosthComponent implements OnInit {

  public todo:any;
  public list=[];
  public status=1;

  // public storage=new StorageService();//引入和使用 没有问题 但是官方不推荐这个方法

  // private storage:StorageService 这叫依赖注入
  constructor(private storage:StorageService) {
    this.todo='';
  }

  ngOnInit() {
    var todolist = this.storage.getItem('todolist');
    console.log(this.storage.getItem('todolist'));
    if(todolist){
      this.list=todolist;
    }
  }

  marksth(e){
    // 1.从storage获取  todolist的数据
    // 2.如果有数据,拿到这个数据,然后把新数据和这个storage数据拼接,重新写入
    // 3.如果没有数据 直接给storage写入数据

    // alert(this.todo);
    var obj={
      todo:this.todo,
      status:this.status
    }
    if(e.keyCode==13){
      console.log(this.todo);
      console.log(this.list);
      var todolist = this.storage.getItem('todolist')
      console.log(this.storage.getItem('todolist'));
      if(todolist){
        todolist.push(obj);
        this.storage.setItem('todolist',todolist);
      }else{
        var arr=[];
        arr.push(obj)
        this.storage.setItem('todolist',arr)
      }
      this.list.push(obj);
      this.todo='';
      // todolist=
    }
  }

  del(index){
    this.list.splice(index,1)
    this.storage.setItem('todolist',this.list)
  }

  change(index,status){
    this.list[index].status=status
    this.storage.setItem('todolist',this.list)
  }
}
