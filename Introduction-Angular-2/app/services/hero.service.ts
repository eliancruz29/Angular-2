import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 1000)) // delay 1 seconds
      .then(() => this.getHeroes());
  }
}
