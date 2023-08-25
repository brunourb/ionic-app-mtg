import { ModelCard } from './../../shared/card';
import { Mode } from '@ionic/core';
import { CardsService } from './../cards.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {


  cards! : ModelCard;

  constructor(private service: CardsService) { }

  ngOnInit() {
    this.service.listar()
    .subscribe(response => {
      this.cards = response;
      console.log(this.cards);  
    });
    
  }
}
