import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Animal = {
  id: number,
  name: string,
  species: string
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get<Animal[]>('http://localhost:3000/animals')
  }

  getCats() {
    return this.http.get<Animal[]>('http://localhost:3000/animals?species=cat')
  }

  getDogs() {
    return this.http.get<Animal[]>('http://localhost:3000/animals?species=dog')
  }

  sendData(animal: Animal) {
    console.log('animal to db', animal)
    return this.http.post<Animal>(`http://localhost:3000/animals`, animal)
  }

  deleteData(id: number) {
    return this.http.delete<Animal>(`http://localhost:3000/animals/${id}`)
  }
  
}
