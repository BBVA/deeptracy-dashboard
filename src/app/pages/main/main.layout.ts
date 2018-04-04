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
import { NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs/Subscription';
import { ProjectService } from '../../@core/data/project.service'


import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'main-layout',
  styleUrls: ['./main.layout.scss'],
  template: `
    <nb-layout [center]="layout.id === 'center-column'" windowMode>
      <nb-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [right]="sidebar.id === 'right'">
        <nb-sidebar-header>{{ title }}</nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <!--
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
      -->

      <nb-sidebar class="settings-sidebar"
                   tag="settings-sidebar"
                   state="collapsed"
                   fixed
                   [right]="sidebar.id !== 'right'">
      </nb-sidebar>
    </nb-layout>
  `,
})
export class MainLayoutComponent  implements OnDestroy {
  layout: any = {};
  sidebar: any = {};

  protected menuClick$: Subscription;

  constructor(protected menuService: NbMenuService,
              protected projectService: ProjectService) {

    this.menuClick$ = this.menuService.onItemSelect()
      .subscribe((elem: any) => {
        console.log('menuClick', elem.item)
        projectService.selectProject(elem.item.id);
      });
  }

  ngOnDestroy() {
    this.menuClick$.unsubscribe();
  }
}
