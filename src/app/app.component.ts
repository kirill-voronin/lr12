import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';
import { HttpClientsService } from './shared/services/http-clients.service';
// import { worker } from 'cluster';
// import { worker } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  filterName = '';
  filterSurname = '';

  constructor(
    private httpClientServece: HttpClientsService
  ) {

  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.httpClientServece.getClient();
    } catch (error) {
      console.error(error);
    }
  }

  getByType(type: number) {
    if (this.workers){
      return this.workers.filter(worker =>
        worker.type === type
      )
    }else{
      return [];
    }
    
  }

  onDeleteWorker(id: number) {
    try {
      let index = this.workers.findIndex(worker => worker.id === id);
      if (index != -1) { this.httpClientServece.deleteClient(id.toString()); }
    } catch (error) {
      console.error(error);
    } finally {
      this.getData();
    }
  }

  async onAddWorker(worker: MyWorker) {
    try {
      if (worker.id == undefined) {
        let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
        worker.id = id;
        // this.workers.push(worker);
        await this.httpClientServece.postClient(worker);
      } else {
        let index = this.workers.find(id => id.id === worker.id);
        if (index == undefined) {
          // this.workers.push(worker);
          await this.httpClientServece.postClient(worker);
        } else {
          alert('Сотрудник с таким id уже существует');
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.getData();
    }
  }

  async onChangeWorker(worker: MyWorker) {
    try {
      let id = worker.id;
      let changeWorker = this.workers.find(changeWorker => changeWorker.id === id);
      if (changeWorker != undefined) {
        changeWorker.name = worker.name.trim() != '' ? worker.name : changeWorker.name;
        changeWorker.surname = worker.surname.trim() != '' ? worker.surname : changeWorker.surname;
        changeWorker.type = worker.type;
        changeWorker.phone = worker.phone.trim() != '' ? worker.phone : changeWorker.phone;
        await this.httpClientServece.putClient(changeWorker);
      } else {
        alert('Сотрудник не найден')
      }
      console.log(changeWorker);
    } catch(error) {
    console.error(error);
  }finally{
    this.getData();
  }


}
}