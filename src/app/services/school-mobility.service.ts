import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from "apollo-angular";
import { Observable } from 'rxjs';
import gql from "graphql-tag";
import * as L from 'leaflet';
import { School } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class SchoolMobilityService {

  constructor(private apollo: Apollo) {

  }

  makeCapitalMarkers(map: L.Map): void {
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
    }).subscribe((res: any) => {
      for (const c of res.data.docks) {

        const fontAwesomeIcon = L.divIcon({
          html: '<fa-icon icon="coffee"></fa-icon>',
          iconSize: [20, 20],
          className: 'myDivIcon'
        });

        const marker = L.marker([c.latitude, c.longitude], {
          riseOnHover : true,
          riseOffset : 250
        })

        marker.bindPopup(c.type);

        marker.addTo(map);
      }
    });
  }

  // findSchools(name_subst: String): Observable<ApolloQueryResult<School[]>> {
  //                                                              |-> une interface enveloppe "schools"
  findSchools(name_subst: String): Observable<ApolloQueryResult<any>> {
    return this.apollo.query<School[]>({
      query: gql`
          query doFindSchools($name_subst: String) {
            schools(where: {name_contains: $name_subst}) {
              id
              name
              latitude
              longitude
            }
          }
        `,
        variables: {
          name_subst: name_subst
        }
    });
  }


}