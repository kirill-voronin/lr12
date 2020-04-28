import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
// import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { ChangeformWorkerComponent } from './ui/changeform-worker/changeform-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    ChangeformWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
