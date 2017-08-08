/// <reference path="_all.ts" />

module ContactManagerApp {

  export interface IPeople {
    name: string,
    rating: number,
    img: string,
    description: string,
    likes: string[],
    dislikes: string[]
  }
}