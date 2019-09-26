import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { DetailsComponent } from './details/details.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';

 
const routes: Routes =[
    { path: '',             component: HomeComponent },
    { path: 'info/:name',             component: DetailsComponent },
    { path: '**', component: HomeComponent },
    // { path: 'pi',             component: PersonsListComponent },
    // { path: 'pi2',             component: AddNewPersonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
