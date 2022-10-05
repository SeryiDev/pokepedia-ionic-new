import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  // Capitalizes the first letter of a String
  formatString(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1) 
  }
}
