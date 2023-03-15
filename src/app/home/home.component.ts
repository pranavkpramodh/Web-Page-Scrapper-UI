import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:string = '';


  constructor( private fb:FormBuilder, private ds:DataService, private router:Router) { }

  searchField = this.fb.group({
    search : ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  getInsights(){
    let searchedUrl = this.searchField.value.search;
    // console.log(searchedUrl);
    if(this.searchField.valid){
      this.ds.getInsights(searchedUrl).subscribe(
        (result:any) => {
        alert(result.message)
        this.router.navigateByUrl("table")
      }, result => {
        alert(result.error.message)
      }
      )
    }else{
      alert('not valid url')
    }
    
  }

  refresh(){
    window.location.reload()
  }

}
