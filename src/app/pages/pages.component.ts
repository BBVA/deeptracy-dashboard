/*
Copyright 2017 BBVA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Component, OnDestroy } from '@angular/core';
import { ProjectService } from '../@core/data/project.service'
import { NbSearchService } from '@nebular/theme';


@Component({
  selector: 'ngx-pages',
  template: `
    <main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </main-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  protected searchService$: NbSearchService;

  menu: any;
  loading: boolean;
  term = '';
  errorMessage = 'default error';

  constructor (public projectService: ProjectService, public searchService: NbSearchService) {
    this.menu = [
      { title: 'Loading from ProjectService...'}
    ];

    this.searchService$ = searchService;
    this.searchService$.onSearchSubmit().subscribe((data: any) => {
      this.term = data.term;
      this.reloadMenu();
    });

    this.reloadMenu();
  }

  /**
   * Handle the projectsService observable
   */
  reloadMenu(): void {
    this.loading = true;
    this.projectService.getProjects({term: this.term})
      .subscribe(
        projects => {
          this.menu = projects;
          this.loading = false;
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnDestroy() {
    // this.searchService$.unsubscribe();
  }
}
