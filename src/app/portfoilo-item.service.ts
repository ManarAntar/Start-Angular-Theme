import { Injectable } from '@angular/core';
import { PortfoiloItem } from './portfoilo-item';

@Injectable({
  providedIn: 'root'
})
export class PortfoiloItemService {

  constructor() { }
  items:PortfoiloItem[]=[
    {name:'LOG CABIN',image:'./../assets/imgs/1.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {name:'TASTY CAKE',image:'./../assets/imgs/2.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {name:'CIRCUS TENT',image:'./../assets/imgs/3.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {name:'CONTROLLER',image:'./../assets/imgs/4.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {name:'LOCKED SAFE',image:'./../assets/imgs/5.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {name:'SUBMARINE',image:'./../assets/imgs/6.png',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'}

  ]
}
