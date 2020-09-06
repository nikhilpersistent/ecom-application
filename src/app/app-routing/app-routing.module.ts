import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from '../login/login.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const routes:Routes = [
  
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      }
    ]
    
  },
  {
    path:'list',
    component:ShoppingListComponent
  }
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
