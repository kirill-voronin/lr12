import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
// import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { ChangeformWorkerComponent } from './ui/changeform-worker/changeform-worker.component';
import { FilterClientsPipe } from './shared/pipes/filter-clients.pipe';
// import { FilterformWorkerComponent } from './ui/filterform-worker/filterform-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    ChangeformWorkerComponent,
    FilterClientsPipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
