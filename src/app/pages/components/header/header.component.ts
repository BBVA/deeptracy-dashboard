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
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService } from '@nebular/theme';
import { NbSearchService } from '@nebular/theme';

import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ProjectService } from '../../../@core/data/project.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  protected searchService$: NbSearchService;
  term: string;
  title: string;
  @Input() position = 'normal';

  constructor(private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              public searchService: NbSearchService,
              public projectService: ProjectService) {

    this.title = 'Please select a project...';

    this.searchService$ = searchService;
    this.searchService$.onSearchSubmit().subscribe((data: any) => {
      this.term = data.term;
    });

    this.menuService.onItemSelect()
      .subscribe((elem: any) => {
        console.log('projectService', elem.item);
        this.title = elem.item.title;
      });

  }

  ngOnInit() {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  cleanSearch() {
    this.searchService$.submitSearch('');
  }
}
