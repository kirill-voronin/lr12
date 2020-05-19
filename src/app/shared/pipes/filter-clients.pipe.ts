import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterClients'
})
export class FilterClientsPipe implements PipeTransform {

  transform(workers: any[], filterName: string, filterSurname: string): any[] {
    
    let newSurname;
    if (filterName == '' && filterSurname == ''){
      return workers;
    }else if (filterName != '' && filterSurname == ''){
      let newWorkers = workers.filter(
        worker => worker.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
      return newWorkers;
    }else if (filterName == '' && filterSurname != ''){
      let newWorkers = workers.filter(
        worker => worker.surname.toLowerCase().indexOf(filterSurname.toLowerCase()) !== -1
      );
      return newWorkers;
    }else{
      let newWorkers = workers.filter(
        worker => worker.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
      let newWorkers2 = newWorkers.filter(
        worker => worker.surname.toLowerCase().indexOf(filterSurname.toLowerCase()) !== -1
      );
      return newWorkers2;
    }
  }
}
