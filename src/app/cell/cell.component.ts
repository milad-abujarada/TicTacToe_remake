import { Component, OnInit } from '@angular/core';
import{ CellServicesService } from './cell-services.service';
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  
  value: string;
  constructor(private cellServices: CellServicesService) { }

  ngOnInit() {
  }

  addSymbol(){
  	this.value = this.cellServices.getSymbol();
  	this.cellServices.changeSymbol();
  };

}
