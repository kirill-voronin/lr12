import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changeform-worker',
  templateUrl: './changeform-worker.component.html',
  styleUrls: ['./changeform-worker.component.css']
})
export class ChangeformWorkerComponent implements OnInit {

  title = 'Добавить или изменить сотрудника';
  myWorkerType = MyWorkerType;
  workerGroup: FormGroup;
  public telephoneMask = ['8',' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  @Output() changeWorker = new EventEmitter();
  @Output() addWorker = new EventEmitter();

  id:number;
  name = '';
  surname = '';
  type = 0;
  

  constructor() { }

  ngOnInit() {
    this.workerGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl({value:'', disabled: false}, [Validators.required]),
      surname: new FormControl({value:'', disabled: false}, [Validators.required]),
      type: new FormControl({value:0, disabled: false}, [Validators.required]),
      phone: new FormControl({value:'', disabled:false})
    })
  }

  onAddWorker(){
    this.workerGroup.updateValueAndValidity();
    let worker = this.workerGroup.value;
    this.addWorker.emit(worker);
    console.log(this.workerGroup.value)
  }

  onChangeWorker(){
    this.workerGroup.updateValueAndValidity();
    let worker = this.workerGroup.value;
    this.changeWorker.emit(worker)
    console.log(this.workerGroup.value)
  }


}
