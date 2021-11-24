import { Injectable } from '@angular/core';

export interface  Items {
  name: string;
  link: string;
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public items: Items[]  = [
    {
      name: 'Каталог',
      link: '1',
      active: false,
    },
    {
      name: 'Сделать заказ',
      link: '1',
      active: false,
    },
    {
      name: 'Контакты',
      link: '1',
      active: false,
    },
  ];
}
