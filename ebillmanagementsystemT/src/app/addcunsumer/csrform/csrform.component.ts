import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cunsumer } from 'src/app/comman/cunsumer';
import { CsrserviceService } from 'src/app/service/csrservice.service';

@Component({
  selector: 'app-csrform',
  templateUrl: './csrform.component.html',
  styleUrls: ['./csrform.component.css']
})
export class CsrformComponent {
  cunsumer : Cunsumer = new Cunsumer(0," ",0,0," "," ",0);

  
  constructor(private csrService:CsrserviceService,private router:Router,private activateRoute:ActivatedRoute) { }
  isEditable:boolean;
  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.cunsumer);
    this.activateRoute.paramMap.subscribe(()=>this.getCunsumerBycunsumer_id());
  }
  getCunsumerBycunsumer_id(){
    const csrID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(csrID);
  if(csrID> 0)
  {
    this.isEditable = true;
    this.csrService.getCunsumerByID(csrID).subscribe(data=>{
      this.cunsumer = data;
      console.log(this.cunsumer)
    });
  }
}
onSubmit(){
  console.log(this.cunsumer);
  if(this.isEditable){

    this.csrService.updateCunsumer(this.cunsumer).subscribe(data=> 
       console.log(data));

      this.router.navigateByUrl("/csrlist");

  }
  else{
  this.csrService.SaveCunsumer( this.cunsumer ).subscribe(data =>
    console.log(data));
    this.router.navigateByUrl("/csrlist");
}
}
}