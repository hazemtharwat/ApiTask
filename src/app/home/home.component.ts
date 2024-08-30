import { Component, inject, OnInit } from '@angular/core';
import { HServiceService } from '../Services/h-service.service';
import { Iproduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly _HServiceService=inject(HServiceService);


  allData:Iproduct[]=[]

  ngOnInit(): void {
    
    this._HServiceService.getData().subscribe({
      next:(res)=>{
        console.log(res);
        this.allData=res.data;
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
