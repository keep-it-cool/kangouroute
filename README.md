# Kangouroute [ALPHA] -> https://kangouroute.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/9317fc01-0dbc-4ea0-b0c3-a6fbd4717f5f/deploy-status)](https://app.netlify.com/sites/kangouroute/deploys)

Project started as a hackathon challenge to answer [the following problematic](https://www.dropbox.com/sh/zgxpx85i6dvfuk9/AADpXKl575nkdwGvpVqDII35a?dl=0&preview=Challenge+11+-+Li%C3%A8ge.pdf).

> Diminuez le trafic aux abords des écoles en développant une application recensant les alternatives à la voiture et les spots de stationnement
> [**Ville de Liège**](https://www.liege.be/)

Key mobility players : schools (parents associations), the parents, the children and a mobility actor (Ville de Liège).

[[Team collaboration public documents on Drive](https://drive.google.com/drive/folders/1RLHxjQB8d-YyAvs4MobJzx_s7NVuAcY6)]

# Architecture

[![Architecture picture](https://lh3.googleusercontent.com/zTrPnq7OwE4s37plvHXvjy2y6EXumhqgx1tpC7RZhSRs0jxr3oPaBobFxCFlfquBQUb2eI6fM-q_JssOJZzG3KfCo0TbULqUvmUgS6rrJGuadn2IJZL-CcgRsel1tfRVZjZhVTkZu9M=w600-h400)](https://photos.google.com/photo/AF1QipOffqiKwme0seBcEKHTLqtpzrOoriRS8mNDrnLl)

The architecture of the solution is inspired by the [JAM stack](https://jamstack.org/).

The backend is supported by [GraphCMS](https://graphcms.com/docs), a headlessCMS. The platform hosts the data and expose it as [graphQL](https://graphql.org/) endpoint. Webhooks can be set up for content events (so you can integrate it with Zapier, Integromat ...).

> The GraphQL endpoint : https://api-eu-central-1.graphcms.com/v2/ckknkbsnpcmfu01xo3k092xgw/master (try the playground ;))

The front is a [angular static site](https://github.com/angular/angular-cli) that solely relies on data provided by the previous API. It is hosted on [netlify](https://www.netlify.com/). Bootstrap, FontAwesome and LeafletJS are used. Check https://kangouroute.netlify.app/

# Open data

## Datasets

* https://www.odwb.be/explore/dataset/signaletique-fase : schools in Brussels-Wallonia (Belgium) -> we filtered it on 4000, 4020, 4030, 4031, 4032 postcodes for Liège
* https://opendata.liege.be/explore/dataset/creches-communales : council child cares in Liège
* https://opendata.liege.be/explore/dataset/shop-and-drive-real-time : real time shop and drive parking spots in Liège
* https://opendata.liege.be/explore/dataset/parkings-voitures-hors-voirie : off-street car parking in Liège **not machine readable** (hack into the page `$('#geojson').data('geojson').features.map(e=> [e.id,e.properties.title,"Parking",e.geometry.coordinates[0],e.geometry.coordinates[1]].join(",")).join("\n")`)
* https://www.transportdata.be/fr/dataset/tec-gtfs : GTFS for TEC buses [and trams -> not in Liège right now but soon] (Wallonia), not used so far (we might look for something more basic for our needs)
* https://opendata.bruxelles.be/explore/dataset/gares-sncb : SNCB train stops (Belgium)
* https://opendata.liege.be/explore/dataset/arceaux-velos : Bicycle hoops in Liège

## DataViz (visualize, filter, aggregate and expose the data)

The datasets are imported dynamically through into a google spreadsheet (`ImportData("the comma separated csv url")` function), look at the `_raw` sheets. Then the data is filtered and aggregated (the `Query` function is pretty cool) in concept sheets (format close to the GraphQL concepts). Those concept sheets are published as csv. Once you open the sheet, from the imports to the published sheets is refreshed

[DataViz google spreadsheet](https://docs.google.com/spreadsheets/d/1KhuTfYY5wq05IC5y2-bctlo1juMgQ5wOqqDttV45sQA/) [A bit of work and cleaning left TODO]

The csv published concept sheets :

* [Schools](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ21NZ1gBNq0p-GyFHT9yEQSDYP3NQHqUbQuv71GNUdeMIaCFFScv6nMIFx4FoJx_JcH9_eBuERePB0/pub?gid=69805668&single=true&output=csv)
* [Docks](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ21NZ1gBNq0p-GyFHT9yEQSDYP3NQHqUbQuv71GNUdeMIaCFFScv6nMIFx4FoJx_JcH9_eBuERePB0/pub?gid=206824472&single=true&output=csv)

[TODO add stops for train and bus]

## GraphQL import

> kind of a hack

[Postman](https://learning.postman.com/) collection runner was used to make a request based on a csv data (the concept sheets data) fed one row at the time to graphQL mutation request towards our graphCMS endpoint (token required). [TODO share this postman import collection]

# Concepts

[TODO schema of objects]

# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). *[not used so far]*
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). *[not used so far]*


# Toolbox

## Tools

* Github
* IntelliJ
* Postman (take the right one : app for windows)
* GraphCMS
* Netlify

## Libraries

* [Leafletjs package for angular](https://github.com/Asymmetrik/ngx-leaflet)
* [Node GTFS explorer for TEC GTFS](https://github.com/BlinkTagInc/node-gtfs) [not used in the end]

## Tutorials

* [Deploy angular app with Netlify](https://dev.to/salimchemes/deploying-angular-app-with-netlify-in-3-steps-55k6)
* [OpenStreetMap through leafletjs in angular app](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet)
* [Angular ajax form with Netlify (not sure it is useful)](https://medium.com/@arronmccrory/netlify-angular-forms-ajax-3b593ce25c07)
* [GTFS specs](https://developers.google.com/transit/gtfs/reference)
