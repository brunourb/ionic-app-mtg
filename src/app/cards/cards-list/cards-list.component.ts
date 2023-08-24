import { Model, Card } from '../../shared/card';
import { map } from 'rxjs';
import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';
import { Mode } from '@ionic/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  providers:[CardsService]
})
export class CardsListComponent  implements OnInit {


  //model!: Model;

  model: Model = {
    cards: []
  };

  constructor(private service: CardsService) {
    console.log("CardsListComponent inicado.");

    this.service.listar().subscribe(res=>{
      console.log(res);
    });
  }

  ngOnInit() {}

}
