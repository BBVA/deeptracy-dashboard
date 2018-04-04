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
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timing' })
export class TimingPipe implements PipeTransform {
  transform(time: number): string {
    if (time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
    }

    return '00:00';
  }

  private initZero(time: number): string {
    return time < 10 ? '0' : '';
  }
}
