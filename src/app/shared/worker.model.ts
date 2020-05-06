export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone?:string;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkersDatabase: MyWorker[] = [
    {id: 1, name: 'Иван', surname:'Иванов',type: 0, phone: '8 (927) 657-32-45'},
    {id: 2, name: 'Петр', surname:'Петров',type: 1, phone: '8 (954) 434-33-68'},
    {id: 3, name: 'Сидр', surname:'Сидоров',type: 2, phone: '8 (961) 567-34-78'},
    {id: 4, name: 'Василий', surname:'Васильев',type: 3, phone: '8 (905) 578-23-76'},
]