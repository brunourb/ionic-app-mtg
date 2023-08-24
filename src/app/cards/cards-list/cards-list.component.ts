import { map } from 'rxjs';
import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  providers:[CardsService]
})
export class CardsListComponent  implements OnInit {

  constructor(private service: CardsService) { 
    this.service.listar().pipe(
      map(response=> console.log(response))
    );
  }

  ngOnInit() {}

}
