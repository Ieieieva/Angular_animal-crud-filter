import { Component } from '@angular/core';
import { Animal, AnimalsService } from 'src/app/services/animals.service';


@Component({
  selector: 'app-filter-animal-switch',
  templateUrl: './filter-animal-switch.component.html',
  styleUrls: ['./filter-animal-switch.component.scss']
})
export class FilterAnimalSwitchComponent {
  animals: Animal[] = [];
  hide: boolean = false;
  filtervalue = 'Pick animal!';
  animalValue = '';

  constructor(private animalsService:AnimalsService) {}

  onSwitch() {
    if (this.hide === false) {
      this.animalsService.getCats().subscribe((response) => {
        console.log(response)
        this.animals = response
        this.hide = true
        this.filtervalue = 'Pick dogs!'
        this.animalValue = 'All cats:'
      })
    } else {
      this.animalsService.getDogs().subscribe((response) => {
        console.log(response)
        this.animals = response
        this.hide = false
        this.filtervalue = 'Pick cats!';
        this.animalValue = 'All dogs:'
      })
    }
  }

}
