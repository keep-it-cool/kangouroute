import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import {SchoolMobilityService} from "../school-mobility.service";

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-school-map',
  templateUrl: './school-map.component.html',
  styleUrls: ['./school-map.component.scss']
})
export class SchoolMapComponent implements AfterViewInit {
  private map;

  constructor(private schoolMobilityService : SchoolMobilityService ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.schoolMobilityService.makeCapitalMarkers(this.map)
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 50.6342723, 5.5598581 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
