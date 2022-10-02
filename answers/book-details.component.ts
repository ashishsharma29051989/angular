import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @ViewChild('f', { static: false }) filterForm: NgForm;

  constructor(private dataService: DataService) { }
  valid = true
  bookdetails = []
  bookView = []
  stars=""
  sortParam=""
  search_query=""



  ngOnInit(): void {
    this.bookdetails = this.dataService.getData()
    this.bookView = this.bookdetails
  }

  onSubmit() {
    const min_prize = this.filterForm.form.value.min_price
    const max_prize = this.filterForm.form.value.max_price
    if (min_prize <= max_prize && min_prize > -1) {
      this.bookView = this.bookdetails.filter(data => {
        if (data.product_saleprice >= min_prize && data.product_saleprice <= max_prize) {
          return true
        }
        else
          return false
      })
      this.valid=true
    }
    else
      this.valid=false

  }
  resetAll() {
    
   window.location.reload()
  }

  reset()
  {
    this.bookView = this.bookdetails
    this.filterForm.form.value.min_price=""
    this.filterForm.form.value.max_price=""
    
  }

  search_now()
  {
    

    this.bookView = this.bookdetails.filter(data => {
      if (data.book_name.indexOf(this.search_query) > -1 ||  data.author.indexOf(this.search_query) > -1) {
        return true
      }
      else
        return false
    })
    this.valid=true
  }

  filter_stars()
  {
    
    //filter by stars
    this.bookView = this.bookdetails.filter(data => {
      if (data.rating >= this.stars) {
        return true
      }
      else
        return false
    })
    this.valid=true
  } 

  setStars(x)
  {
    this.stars=x
    
  }

  setSort(x)
  {
    this.sortParam=x
  }

  sort_by_param()
  {
    

    if (this.sortParam=="rating")
    {
      this.bookView.sort(function (a, b) {
        return a.rating - b.rating;
      });
    }
    else if(this.sortParam=="discount")
    {
      this.bookView.sort(function (a, b) {
        var discount1=a.product_costprice - a.product_saleprice
        var discount2 = b.product_costprice - b.product_saleprice
        return discount1 - discount2;
       
      });
    }
    else
    {
      this.bookView.sort(function (a, b) {
        
        return a.product_saleprice - b.product_saleprice;
       
      });
    }


    this.valid=true;

  }

}
