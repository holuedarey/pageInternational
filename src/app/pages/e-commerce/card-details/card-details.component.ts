import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  card:any = [
    {pan: "3456", scheme:"Master"},
    {pan: "1234", scheme:"Master"},
    {pan: "4456", scheme:"Visa"},
    {pan: "7890", scheme:"Master"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
