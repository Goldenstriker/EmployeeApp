import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from  './post'; 
@Injectable()
export class PostService {
  //baseUrl:string="https://jsonplaceholder.typicode.com";
  //https://dataprovider.goldenstriker.repl.co/GetData/
  baseUrl:string="https://dataprovider.goldenstriker.repl.co/GetData/";
  constructor(private httpClient:HttpClient) { }
  get_posts(){
    //return this.httpClient.get<Post[]>(this.baseUrl+'/posts');
    return this.httpClient.get<Post[]>(this.baseUrl);
  }

}