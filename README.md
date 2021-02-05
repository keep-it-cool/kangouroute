# Kangouroute

[![Netlify Status](https://api.netlify.com/api/v1/badges/9317fc01-0dbc-4ea0-b0c3-a6fbd4717f5f/deploy-status)](https://app.netlify.com/sites/kangouroute/deploys)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# From wiki

Welcome to the hackathon wiki!

[Projet 14 - Walhain (gestion accès)](https://www.dropbox.com/sh/zgxpx85i6dvfuk9/AADpXKl575nkdwGvpVqDII35a?dl=0&preview=Challenge+14+-+Walhain-version+2.pdf)

# Outils

* Github Desktop
* IntelliJ
* Postman (take the right one : app for windows)
* QGIS

# Libraries

* [Leafletjs package for angular](https://github.com/Asymmetrik/ngx-leaflet)
* [Node GTFS explorer for TEC GTFS](https://github.com/BlinkTagInc/node-gtfs)

# Tuto

* [Deploy angular app with Netlify](https://dev.to/salimchemes/deploying-angular-app-with-netlify-in-3-steps-55k6)
* [OpenStreetMap through leafletjs in angular app](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet)
* [Angular ajax form with Netlify (not sure it is useful)](https://medium.com/@arronmccrory/netlify-angular-forms-ajax-3b593ce25c07)
* [GTFS specs](https://developers.google.com/transit/gtfs/reference)

# Architecture

# Brainstorming

# Open data processed

> Parking hors voirie through
```
$('#geojson').data('geojson').features.map(e=> [e.id,e.properties.title,"Parking",e.geometry.coordinates[0],e.geometry.coordinates[1]].join(",")).join("\n")
```

* [Schools](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ21NZ1gBNq0p-GyFHT9yEQSDYP3NQHqUbQuv71GNUdeMIaCFFScv6nMIFx4FoJx_JcH9_eBuERePB0/pub?gid=69805668&single=true&output=csv)
* [Docks](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ21NZ1gBNq0p-GyFHT9yEQSDYP3NQHqUbQuv71GNUdeMIaCFFScv6nMIFx4FoJx_JcH9_eBuERePB0/pub?gid=206824472&single=true&output=csv)

