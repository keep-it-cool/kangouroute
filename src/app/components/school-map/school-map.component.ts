import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { School } from 'src/generated/graphql';
import {SchoolMobilityService} from "../../services/school-mobility.service";

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
export class SchoolMapComponent implements AfterViewInit, OnChanges {
  private map;
  private localCircle;

  @Input()
  public zoomedSchool: School;

  constructor(private schoolMobilityService : SchoolMobilityService ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.schoolMobilityService.makeCapitalMarkers(this.map)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.zoomedSchool)
    {
      console.log(">changes: " + this.zoomedSchool.name);
      var latlng = L.latLng(this.zoomedSchool.latitude, this.zoomedSchool.longitude);

      if(this.localCircle){
        this.map.removeLayer(this.localCircle);
      }

      this.localCircle = L.circle([this.zoomedSchool.latitude, this.zoomedSchool.longitude],
        {
        color:'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
        radius:100
      }).addTo(this.map);

      this.map.setView(latlng, 16);
    }
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

    L.control.scale().addTo(this.map);
  }
}
