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
import { NgModule } from '@angular/core';

import { TreeModule } from 'ng2-tree';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
