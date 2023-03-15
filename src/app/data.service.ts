import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getInsights(searchedUrl:any){
    const data = {
      searchedUrl
    }
    return this.http.post('http://localhost:3000/getinsights', data)
  }

  getAllData(){
    return this.http.get('http://localhost:3000/getalldata')

  }

  addfav(id:any){
    const data ={
      id
    }
    return this.http.put('http://localhost:3000/addfav', data)
  }

  removefav(id:any){
    const data ={
      id
    }
    return this.http.put('http://localhost:3000/removefav', data)
  }

  remove(id:any){
    console.log(id);
    
    return this.http.delete('http://localhost:3000/remove/'+id)
  }



}
