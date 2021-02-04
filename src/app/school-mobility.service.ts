import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class SchoolMobilityService {

  constructor(private apollo: Apollo) {

  }

  makeCapitalMarkers(map: L.map): void {
    this.apollo.query<any>({
      query: gql`
          query MyQuery {
            docks {
              latitude
              longitude
              name
              type
            }
          }
        `
    })
      .subscribe((res: any) => {
      for (const c of res.data.docks) {

        const fontAwesomeIcon = L.divIcon({
          html: '<fa-icon icon="coffee"></fa-icon>',
          iconSize: [20, 20],
          className: 'myDivIcon'
        });

        L.marker([c.latitude, c.longitude]).addTo(map);
      }
    });
  }


}
