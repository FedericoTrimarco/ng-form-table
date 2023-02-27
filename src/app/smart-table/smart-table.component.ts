import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit{
  settings: any;
  sourceValori: LocalDataSource = new LocalDataSource;
  
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      address: 'via del test 34',
      job: 'web developer',
      email: "Sincere@april.biz"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      address: 'via del test 34',
      job: 'web developer',
      email: "Rey.Padberg@rosamond.biz"
    },
    {
      id: 13,
      name: "Diego Salvati",
      username: "Diego.Salvati",
      address: 'via del test 34',
      job: 'web developer',
      email: "Rey.Padberg@rosamond.biz"
    },
    {
      id: 15,
      name: "Luca Laurenti",
      username: "Luca.Laurenti",
      address: 'via del test 34',
      job: 'web developer',
      email: "Rey.Padberg@rosamond.biz"
    },
  ];

  constructor(
    private router: Router,
  ){

  }

  ngOnInit(): void {
    // 3) inserire una funzione che richiami sia il setup dei settings che il caricamento dei dati all'interno di source valori
  }

  routeTo(path: any) {
    this.router.navigate([path]);
  }

  // 1) creare una funzione per i settings


  // 2) creare una funziona che carichi i dati all'interno della variabile sourceValori
}
