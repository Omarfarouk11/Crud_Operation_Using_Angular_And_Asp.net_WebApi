import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Category } from './category/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserivceService {
   options = { responseType: 'text' as 'json' };
  constructor(private httpservice:HttpClient) {


   }

   GetAllCategory():Observable<Category[]>{

    return this.httpservice.get<Category[]>('https://localhost:44376/api/Categories',{responseType:'json'});

   }
   AddCategory(model:Category):Observable<Category>{
    
    return this.httpservice.post<Category>('https://localhost:44376/api/Categories',model);

   }
   DeleteCategory(ID:string):Observable<string>{
    return this.httpservice.delete<string>(`https://localhost:44376/api/Categories/${ID}`,this.options);
   }
   UpdateCategory(model:Category,ID:string):Observable<string>{
    return this.httpservice.put<string>(`https://localhost:44376/api/Categories/${ID}`,model,this.options);
   }
    
   GetCategoryByID(ID:string):Observable<Category>
   {
    return this.httpservice.get<Category>(`https://localhost:44376/api/Categories/${ID}`);
   }

  }
