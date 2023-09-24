import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/models/Category';
import { CategoryserivceService } from '../categoryserivce.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  catID:string=''
  category:Category={} as Category

  constructor(private activatedrouter:ActivatedRoute,private categoryservice:CategoryserivceService){
    this.catID=this.activatedrouter.snapshot.paramMap.get("id")!;

  }
  ngOnInit(): void {
    this.view();
  }
  view(){
    this.categoryservice.GetCategoryByID(this.catID).subscribe((res:Category)=>{
      this.category=res;
      console.log(this.category);
     
  })
}
}
