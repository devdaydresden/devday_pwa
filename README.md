
# DEVDAY PWA
## Requirements for local development
On Windows you have to use [git-bash](https://gitforwindows.org/) for all npm actions. Make sure to execute git-bash as Administrator.

    npm install -g @angular/cli

## Folder Structure of DEVDAY PWA

    |projectfolder
    |-devday (the DEVDAY PWA name)
    |- angular.json (the angular build and development configuration)
    |- package.json (the default package json of the DEVDAY PWA includes all required packages)
    |--| src
    |--| index.html (the default index file used on deployed machines)
    |--| style.scss (the default applicationwide css)
    |--| manifest.json (the manifest file used for browser/service-worker)
    |--| ngsw-config.json (the configuration for the service-worker)
    |--|-| environments
    |--|-|- environments.ts (used for local development)
    |--|-|- environments.prod.ts (used for productive deployment)
    |--|-|- environments.test.ts (used for development/test machine deployment)
    |--|-|app
    |--|-|-| components (includes the components which have logic e.g. serviceCalls in them)
    |--|-|-| modules (includes the modules used in the application)
    |--|-|-|-|components (includes the DEVDAY PWA where all new components should be registered with)
    |--|-|-| pages (the pages/views used in the application)
    |--|-|-| routing (includes the routingDEVDAY PWA and later on guards if required)
    |--|-|-| services (holds services which are modul specific and which are not served by the components library)
    |--|-|-| shared
    |--|-|-|-| directives (includes directives for the application)
    |--|-|-|-| helper (includes helper functions for the application)
    |--|-|-|-| pipes (includes pipes for the application)
    |--|-| app.component.html
    |--|-| app.component.scss
    |--|-| app.component.ts
    |--|-| app.module.ts
    |--|-| animations.ts (includes the animations used for site transitions from page to page)
    |--| ssl (includes ssl certificate for local development)

   ## NPM Scripts
   Can be started with the *npm run* command.
### start

    ng serve --ssl true --ssl-cert './ssl/server.crt' --ssl-key './ssl/server.key
Serves the application for local development

### build

    ng build
Executes a local build into the generated dist folder.

### buildtest

    ng build --prod --output-hashing none

  Builds the application for deployment on the test-system.

### buildprod

    ng build --prod

  Builds the application for deployment on the production-system.

## General Angular commands

## generating a new component

    ng g component ./src/components/{{componentName}}  --module=./modules/components
Generates a new components in the components folder and registrate it to the components module.
## generating a new page/view

    ng g component /pages/{page-name}

Generates a new page/view in the pages folder.

## generating a new service

    ng g service /services/{service-name}

Generates a new service in the services folder.

## generating a new module

    ng g module ./src/modules/{module-name}
Generates a new module in the modules folder.

## generating a new interface

    ng g interface ./src/classes/{interface-name}
Generates a new interface in the classes folder.

## generating a new enum

    ng g enum ./src/classes/enum/{enum-name}
Generates a enw enum in the classes/enum folder.

## generating a new directive

    ng g directive ./src/shared/directives/{directive-name}

Generates a new directive in the shared/directives folder.

## generating a new pipe

    ng g pipe ./src/shared/pipes/{pipe-name}
Generates a new pipe in the shared/pipes folder.

## generating a new guard

    ng g guard ./src/routing/{guard-name}
Generates a new guard in the routing folder.


