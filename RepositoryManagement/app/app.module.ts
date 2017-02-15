import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryService } from './repository/repository.service';

import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DataTableModule, SharedModule],
    declarations: [AppComponent, RepositoryComponent],
    bootstrap: [AppComponent],
    providers: [RepositoryService]
})
export class AppModule { }
