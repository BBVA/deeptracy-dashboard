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

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { getConfig } from '../../shared/config/env.config';
import { Project } from '../../models/project';
import { find } from 'lodash';

/**
 * This class provides the Projects service
 */
@Injectable()
export class ProjectService {

  private apiURL = `${getConfig().api}`;
  private projectList: Project[];

  /**
   * Creates a new ProjectsService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {
    console.log('Project API: ' + this.apiURL);
  }

  /**
   * Get a project detail
   *
   * @return {Project[]} The Observable for the HTTP request.
   */
  getProject(id: string): Observable<Project> {
    const url = `${this.apiURL}project/${id}`;
    return this.http.get(url)
      .map((res: Response) => {
        const project = res.json().info;
        project['id'] = project['id'] ? project['id'] : project['_id'];
        return project as Project;
      })
      .catch(this.handleError);
  }

  /**
   * Get a list of projects
   *
   * @return {Project[]} The Observable for the HTTP request.
   */
  getProjects(payload: any): Observable<Project[]> {
    let url = `${this.apiURL}project`;
    const self = this;

    if (payload && payload.term) {
      url += '?term=' + payload.term;
    }

    return this.http.get(url)
      .map((res: Response) => {
        self.projectList = [];
        for (const project of res.json()) {
          // TODO IconLanguageParser
          const icons = {
            javascript: 'icon-js_badge',
            java: 'icon-java',
            nodejs: 'icon-nodejs',
            python: 'icon-python'
          };
          project.title = project.title || project.name;
          project.icon = icons[project.language];
          project.link = '/project/' + project.id;
          self.projectList.push(project);
        }
        return self.projectList as Project[];
      })
      .catch(this.handleError);
  }

  /**
   * Select a project from Project[]
   *
   * @return {Project[]} The Observable.
   */
  selectProject(id: string): Project {
    return find(this.projectList, { id: id })
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
