import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private myapi:ApiService) {}
   

  fetchData=()=>{
    this.myapi.viewstudent().subscribe(
      (data:any)=>{
        console.log("response"+data)
     let result=JSON.parse(data)
     console.log(result)
        this.name =result.name;
      }
    )
  }

  name:any={}

  ngOnInit(): void {
  }

}
