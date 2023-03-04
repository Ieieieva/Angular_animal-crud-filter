import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Animal, AnimalsService } from 'src/app/services/animals.service';


@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent {
  animals: Animal[] = []

  constructor(private animalsService:AnimalsService) {}

  addAnimalForm = new FormGroup({
    name: new FormControl(''),
    species: new FormControl(''),
  });

  onSubmit() {
    console.log(this.addAnimalForm.value)
    this.onSendData()
  }

  onSendData() {
    const addedAnimalData:any = this.addAnimalForm.value
    console.log('addedAnimalData', addedAnimalData)
    this.animalsService
      .sendData({
        id: Math.floor(Math.random() * 100),
        name: addedAnimalData.name,
        species: addedAnimalData.species
      })
      .subscribe((response) => {
        console.log('posted', response)
        this.animals.push(response)
    })
  }

}

