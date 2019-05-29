import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PostService } from './post.service';
import { PostComponent } from './post/post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, EmployeeComponent, PostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
