import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './Swagger';
import { BurgersService } from './Swagger/api/burgers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerViewComponent } from './burger-view/burger-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerDetailsViewComponent } from './burger-details-view/burger-details-view.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'burgers', component: BurgerViewComponent },
  { path: 'burgers/:id', component: BurgerDetailsViewComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerViewComponent,
    BurgerDetailsComponent,
    BurgerDetailsViewComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BurgersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
