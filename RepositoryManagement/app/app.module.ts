import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryService } from './repository/repository.service';
import { AppRoutingModule } from './routing.module';

import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, DataTableModule, SharedModule, HttpModule],
    declarations: [AppComponent, RepositoryComponent],
    bootstrap: [AppComponent],
    providers: [RepositoryService]
})

export class AppModule {}