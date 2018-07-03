//这个模块会告诉angular如何组装应用


//引入模块
import { BrowserModule } from '@angular/platform-browser';//浏览器解析模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';//数据请求模块



import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { DosthComponent } from './components/dosth/dosth.component';
import { DatasComponent } from './components/datas/datas.component';
import { AppComponent } from './app.component';///自定义模块;
import { HeaderComComponent } from './components/header-com/header-com.component';
import { NewsComComponent } from './components/news-com/news-com.component'

import { StorageService } from './services/storage.service';

/* @NgModule装饰器将AppModule标记为 Angular 模块类(也叫NgModule类)
  @NgModule接受一个元数据对�, HeaderComponent��,�, NewsComponent��数 Angular 如何�,�, HomeComponent�启动应�, DosthComponent�
*/ 

@NgModule ({
  declarations: [ //引入当前项目运行的组件, 自定义组件都需要引入并且在这个里面配置
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    DosthComponent,
    DatasComponent, 
    HeaderComComponent,
    NewsComComponent
  ],
  imports: [  //当前的项目依赖哪些模块
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [StorageService],//定义的服务  回头放在这个里面
  bootstrap: [AppComponent] //默认启动哪个组件
})

//根模块不需要导出任何东西, 因为其他组件不需要导入根模块. 但是一定要写
export class AppModule { }
