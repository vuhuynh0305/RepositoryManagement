﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
const routes: Routes = [
    { path: 'repository/:id', component: RepositoryComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }