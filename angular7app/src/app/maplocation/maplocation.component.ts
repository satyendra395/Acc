import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{ LattitudeserviceService } from '../lattitudeservice.service';

@Component({
  selector: 'app-maplocation',
  templateUrl: './maplocation.component.html',
  styleUrls: ['./maplocation.component.css']
})
export class MaplocationComponent implements OnInit {

  public places: any[];

  
  constructor( private latServ: LattitudeserviceService) { }

  ngOnInit() {
  
    this.latServ.fetchNews().subscribe(locations => {
      console.log(locations);
      this.places = locations
    });
  }

}
