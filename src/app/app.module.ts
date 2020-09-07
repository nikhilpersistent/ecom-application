import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from 'src/store/reducer/shopping.reducer';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      shopping:ShoppingReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
