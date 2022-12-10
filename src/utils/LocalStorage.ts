export class LocalStorage {

  item: any;
  startValue: string;

  constructor(item: any, startValue: string) {
    this.item = item;
    this.startValue = startValue;
  }

  save(data: any) {
    localStorage.setItem(this.item, JSON.stringify(data));
  }

  load() {
    const data = localStorage.getItem(this.item);
    return data ? JSON.parse(data) : this.startValue;
  }

  delete() {
    localStorage.removeItem(this.item);
  }
}

export default LocalStorage;
