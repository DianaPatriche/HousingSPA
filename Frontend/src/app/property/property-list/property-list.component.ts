import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"Gold Apartment",
      "Type":"Apartment",
      "Price":27800
    },
    {
      "Id":3,
      "Name":"Diamond House",
      "Type":"House",
      "Price":30000
    },
    {
      "Id":4,
      "Name":"Velvet Apartment",
      "Type":"Apartment",
      "Price":12000
    },
    {
      "Id":5,
      "Name":"Tower House",
      "Type":"House",
      "Price":17800
    },
    {
      "Id":6,
      "Name":"Green House",
      "Type":"House",
      "Price":20000
    },
    {
      "Id":7,
      "Name":"Alfa House",
      "Type":"House",
      "Price":15500
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
