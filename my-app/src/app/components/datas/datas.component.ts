import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';


@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  public keywords:any

  constructor(private http:Http, private jsonp:Jsonp) { }

  ngOnInit() {
  }

  requestInput(){
    var url="http://127.0.0.1:3000"
    this.http.get(url).subscribe(function(data){
      console.log(data)
    },function(error){
      console.log('请求失败'+ error)
    })
      // console.log(this.keywords);
  }

  request(){
    var url="http://127.0.0.1:3000"
    this.http.get(url).subscribe(function(data){
      var arr = JSON.parse(data._body)
      console.log(arr)
    },function(error){
      console.log('请求失败'+ error)
    })
  }


  // jsonp 必须得在url里面加个 &callback=JSONP_CALLBACK 回调函数
  requestJsonp(){
    var url="https://www.sojson.com/open/api/weather/json.shtml?city=广州&callback=JSONP_CALLBACK"
    console.log(this.jsonp.get(url))
    this.jsonp.get(url).subscribe(function(data){
      console.log(data)
    },function(error){
      console.log('请求失败'+ error)
    })
  }
  
}
