import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-img-1.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },


      {
        id: 2,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 2,
        imageUrl: '/assets/food-img-2.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 3,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-img-3.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 4,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: .5,
        imageUrl: '/assets/food-img-4.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 5,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 3.5,
        imageUrl: '/assets/food-img-5.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 6,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-img-6.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 7,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-img-7.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

      {
        id: 8,
        name: 'pizza',
        cookTime: '10-20',
        price: 100,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-img-8.jpg',
        tags: ['Fastfood', 'pizza', 'Lunch'],
      },

    ]
  }
}
