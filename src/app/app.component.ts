import { Component } from '@angular/core';
import { Animal, AnimalsService } from './services/animals.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animals: Animal[] = []

  constructor(private animalsService:AnimalsService) {}

  ngOnInit() {
    this.animalsService.getData().subscribe((response) => {
      this.animals = response
    })
  }

  onDeleteAnimal(animal: Animal) {
    this.animalsService.deleteData(animal.id).subscribe((response) => {
      this.animals = this.animals.filter(item => item.id !== animal.id)
    })
  }
}
