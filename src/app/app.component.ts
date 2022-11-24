import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showList: boolean = false;
  heroesA = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' },
  ];
  myData: string = '';

  heroesB = this.heroesA;

  FilterHeroes(e: any) {
    this.showList = true;
    let st = e.target.value;
    //this.heroesB = this.heroesB.filter(this.isBigEnough(e.target.value))
    this.heroesB = this.heroesA.filter((entry) => entry.name.includes(st));
    console.log(this.heroesB);
  }

  hideList() {
    this.showList = false;
  }

  setshowList() {
    this.showList = true;
  }

  setToList(e: any) {
    this.myData = e;
  }
}
