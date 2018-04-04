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
import { Scan } from '../../models/scan';

/**
 * This class provides the Scans service
 */
@Injectable()
export class ScanService {

  private apiURL = `${getConfig().api}`;

  /**
   * Creates a new ScansService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Get a list of Scans
   *
   * @return {Scan[]} The Observable for the HTTP request.
   */
  getScansByProjectId(id: string): Observable<any[]> {
    const url = `${this.apiURL}project/${id}/scans?offset=0&limit=10000`;

    return this.http.get(url)
      .map((res: Response) => {
        const scanList = [];
        let last = null;
        for (const row of res.json()) {
          const date = new Date(row['created']);
          row['id'] = row['id'] ? row['id'] : row['_id'];

          row['count'] = row['total_vulnerabilities'];
          if (last == null) {
            last = row['count'];
          }

          row['delta'] = (row['count'] - last) / last * 100;
          if (row['delta'] === 0) {
            row['delta'] = null;
          }

          if (last && last > row['count']) {
            row['down'] = 'false';
          }

          last = row['count'];
          row['total'] = row['total_packages'];
          row['date'] = date.getFullYear() + '-' + date.getMonth() + '-' + (date.getDay() < 10 ? '0' + date.getDay() : date.getDay());
          row['hour'] = date.getHours() + ':' + date.getMinutes() + ':' + (date.getMilliseconds() < 10 ? '0' +
            date.getMilliseconds() : date.getMilliseconds());
          scanList.push(row);
        }
        return scanList as Scan[];
      })
      .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
