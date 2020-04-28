import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-changeform-worker',
  templateUrl: './changeform-worker.component.html',
  styleUrls: ['./changeform-worker.component.css']
})
export class ChangeformWorkerComponent implements OnInit {

  title = 'Добавить или изменить сотрудника';
  myWorkerType = MyWorkerType;
  @Output() changeWorker = new EventEmitter();
  @Output() addWorker = new EventEmitter();

  id:number;
  name = '';
  surname = '';
  type = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker(){
    let worker: MyWorker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type
    }
    if(this.name.trim() === '' || this.surname.trim() === ''){
      alert('Введите Фамилию и Имя');
    }else{
      this.addWorker.emit(worker);
    }
  }

  onChangeWorker(){
    let worker: MyWorker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type
    }
    if(this.name.trim() === '' && this.surname.trim() === ''){
      alert('Введите Фамилию и Имя')
    }else{
      this.changeWorker.emit(worker)
    }
  }


}
