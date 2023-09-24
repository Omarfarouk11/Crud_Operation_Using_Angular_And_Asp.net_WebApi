import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoryserivceService } from '../categoryserivce.service';
import { Category } from './models/Category';
import{FormBuilder} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[] 
  category:Category={} as Category
  IsEditMode:boolean=false;
  constructor(private categoryservice:CategoryserivceService,private fb:FormBuilder,private router:Router){

  }
  categoryform=this.fb.group({
    name:[''],
    urL_Handle:['']
  })
  ngOnInit(): void {
   this.GetAllCategory();


  }

  GetAllCategory(){
    this.categoryservice.GetAllCategory().subscribe((res:Category[])=>
    {
      
      this.categories=res;
      
    })

  
  }

  AddCategory(){
    
    this.category.name=this.categoryform.value.name!;
    this.category.urL_Handle=this.categoryform.value.urL_Handle!;
    this.categoryservice.AddCategory(this.category).subscribe((res:Category)=>{
      
 
      this.categories.push(res);
    
        alert("Your Item Is Added Successfully ...");
      
    }
    )
  }


  DeleteCategory(ID:string)
  {
    this.categoryservice.DeleteCategory(ID).subscribe((res)=>{
    alert(res);
     this.GetAllCategory();
    })  
  }

 
  EditCategory(ID:string)
  {
  
    this.IsEditMode=true;
    this.categoryservice.GetCategoryByID(ID).subscribe((res:Category)=>{
     this.category=res;
     this.categoryform.patchValue({
      name:this.category.name,
      urL_Handle:this.category.urL_Handle
     })
   })
  

  }
  editCategory()
  {
   
    this.category.name=this.categoryform.value.name!
    this.category.urL_Handle=this.categoryform.value.urL_Handle!
    this.categoryservice.UpdateCategory(this.category,this.category.id).subscribe((res:string)=>{
    
      alert(res);
      this.GetAllCategory();
  
 
    })
    
    
  }
  exit(event:any)
  {
    this.IsEditMode=false;
    if(this.IsEditMode==false){
      this.categoryform.patchValue({
        name:'',
        urL_Handle:''
       })
     }
    
    }
   view(ID:string)
   {
    this.router.navigate(['viewcategory',ID]);
    
   }
  }
  



