import { Component, OnInit } from '@angular/core';
import { PortfoiloItem } from './../portfoilo-item';
import { PortfoiloItemService } from './../portfoilo-item.service';

@Component({
  selector: 'app-portfoilo',
  templateUrl: './portfoilo.component.html',
  styleUrls: ['./portfoilo.component.css', '../app.component.css']
})
export class PortfoiloComponent implements OnInit {
  Items: PortfoiloItem[] = [];
  name: string = '';
  imgSrc: string = '';
  description: string = '';
  atClick:string[]=[];

  constructor(private _PortfoiloItemService: PortfoiloItemService) { }
  show(y:any) {
    this.name = y.name;
    this.imgSrc = y.image;
    this.description = y.desc;
    this.atClick[0]='5';
  }
  close(){
    this.atClick.length=0;
  }

  ngOnInit(): void {
    this.Items = this._PortfoiloItemService.items;
  }
}
