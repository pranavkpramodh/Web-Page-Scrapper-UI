import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  allData:any = [];

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    // for get all datas from collection details
    // subscribe to observable it returns a observable
    this.ds.getAllData().subscribe(
      (result:any) => {
        this.allData = result.allData;
        console.log(this.allData);

    })
  }

  addfav(id:any){
    this.ds.addfav(id).subscribe(
      (result:any) => {
        window.location.reload()
      },result => {
        alert(result.error.message)
      }
    )
  }

  removefav(id:any){
    this.ds.removefav(id).subscribe(
      (result:any) => {
        window.location.reload()
      },result => {
        alert(result.error.message)
      }
    )
  }

  remove(id:any){
    this.ds.remove(id).subscribe(
      (result:any) => {
        window.location.reload()
      },result => {
        alert(result.error.message)
      }
    )

  }

}
