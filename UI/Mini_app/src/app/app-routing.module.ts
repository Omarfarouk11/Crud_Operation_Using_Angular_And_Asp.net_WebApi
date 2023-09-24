import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { ViewCategoryComponent } from './Components/view-category/view-category.component';

const routes: Routes = [
{path:'category',component:CategoryComponent},
{path:'category/:id',component:CategoryComponent},
{path:'viewcategory/:id',component:ViewCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
