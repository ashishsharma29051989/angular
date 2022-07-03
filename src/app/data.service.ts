import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  bookDetails = [
    {
      "bookid": 123,
      "book_name": "The Alchemist",
      "product_costprice": 160,
      "product_saleprice" : 150,
      "rating" : 3.47,
      "author": "Paulo Coelho",
      "description":" It gives you an insight of how life can be in different perspectives."
    },
    {
      "bookid": 124,
      "book_name": "Rich Dad Poor Dad",
      "product_costprice": 184,
      "product_saleprice" : 120,
      "rating" : 4.47,
      "author": "Kiyosaki Robert T",
      "description":"Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing"
    },
    {
      "bookid": 125,
      "book_name": "Murder on the Orient Express",
      "product_costprice": 446,
      "product_saleprice" : 420,
      "rating" : 2.47,
      "author": "Agatha Christie",
      "description":"A classic thriller by Agatha Chistie"
    },
    {
      "bookid": 126,
      "book_name": "All the Light We Cannot See",
      "product_costprice": 450,
      "product_saleprice" : 350,
      "rating" : 3.37,
      "author": "Anthony Doerr",
      "description":"All the Light We Cannot See is a war novel"
    },
    {
      "bookid": 127,
      "book_name": "Cracking the Coding Interview:",
      "product_costprice": 3000,
      "product_saleprice" : 2150,
      "rating" : 4.8,
      "author": "Laakmann McDowell",
      "description":"A book about about coding interviews"
    }
  ]

  getData(){
    return this.bookDetails
  }
}
