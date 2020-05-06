import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';
// import { worker } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter(worker =>
      worker.type === type
    )
  }

  onDeleteWorker(id: number) {
    let index = this.workers.findIndex(worker => worker.id === id);
    if (index != -1) {
      this.workers.splice(index, 1)
    }
  }

  onAddWorker(worker: MyWorker) {
    if (worker.id == undefined) {
      let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
      worker.id = id;
      this.workers.push(worker);
    } else {
      let index = this.workers.find(id => id.id === worker.id);
      if (index == undefined) {
        this.workers.push(worker);
      } else {
        alert('Сотрудник с таким id уже существует');
      }
    }
  }

  onChangeWorker(worker: MyWorker) {
    let id = worker.id;
    let changeWorker = this.workers.find(changeWorker => changeWorker.id === id);
    if (changeWorker != undefined) {
      changeWorker.name = worker.name.trim() != '' ? worker.name : changeWorker.name;
      changeWorker.surname = worker.surname.trim() != '' ? worker.surname : changeWorker.surname;
      changeWorker.type = worker.type;
      changeWorker.phone = worker.phone.trim() != '' ? worker.phone : changeWorker.phone;;
    } else {
      alert('Сотрудник не найден')
    }
    console.log(changeWorker);



  }
}
