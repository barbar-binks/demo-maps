import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  maps: string = ''; // PASTE YOUR GOOGLE MAPS API KEY HERE
  mapId: string; // PASTE YOUR MAP JAVASCRIPT MAP ID HERE
  map: GoogleMap;

  constructor() {}

  async ngOnInit(): Promise<void> {
      const mapRef = document.getElementById('map');
      this.map = await GoogleMap.create({
        id: 'test-map',
        element: mapRef!,
        apiKey: this.maps,
        config: {
          mapId: this.mapId,
          center: {
            lat: 13.70146,
            lng: -89.22443,
          },
          zoom: 20,
          //disableDefaultUI: true, // this causes the issue
        }
        
      });
  }

  
}
