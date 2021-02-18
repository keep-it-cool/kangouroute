import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from "apollo-angular";
import { Observable } from 'rxjs';
import gql from "graphql-tag";
import * as L from 'leaflet';
import { DockType, School } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class SchoolMobilityService {

  constructor(private apollo: Apollo) {

  }

  makeCapitalMarkers(map: L.Map): void {

    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.apollo.query<any>({
      query: gql`
          query MyQuery {
            docks(first:10000) {
              latitude
              longitude
              name
              type
            }
          }
        `
    }).subscribe((res: any) => {
      for (const c of res.data.docks) {

       let marker;

        if(c.type == DockType.BicycleHoop){
          marker = L.marker([c.latitude, c.longitude], {
            riseOnHover : true,
            riseOffset : 250,
            icon : greenIcon
          })
        }else{
          marker = L.marker([c.latitude, c.longitude], {
            riseOnHover : true,
            riseOffset : 250
          })
        }
        

        marker.bindPopup(c.type);

        marker.addTo(map);
      }
    });
  }
}
