// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: '../views/hero-detail.component.html',
  styleUrls: [ '../styles/hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(_hero => this.hero = _hero);
    });
  }

  goBack(): void {
    this.location.back();
  }
}