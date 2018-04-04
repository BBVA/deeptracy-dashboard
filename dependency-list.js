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

class Dependencies {
    constructor() {
        this.package = require('./package.json')
        this.packageDependencies = []
    }

    searchDependencies(dependencies) {
        for (let prop in dependencies) {
            const json = require(`./node_modules/${prop}/package.json`)

            this.packageDependencies.push(json)
        }
    }

    search() {
        this.searchDependencies(this.package.dependencies)
        this.searchDependencies(this.package.devDependencies)
    }

    show() {
        this.packageDependencies.forEach((packageDependencie) => {
          let name = packageDependencie.name
          let version = packageDependencie.version
          let url = packageDependencie.repository?packageDependencie.repository.url:packageDependencie.homepage || packageDependencie._resolved
          let author = packageDependencie.author?packageDependencie.author.name || packageDependencie.author:''
          let license = packageDependencie.license?packageDependencie.license.type || packageDependencie.license:''
          console.log(name + '|' + url + '|' + license + '|' +  'x' + '|' + version)
        })
    }
}

const dependencies = new Dependencies()
dependencies.search()
dependencies.show()
