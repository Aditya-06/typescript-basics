// Any object that has a location property should be allowed to have a marker on the map
// ie -> minimum req for showing a marker is having the location object
// Both User and Company satisfy this condition
interface locationObject {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // make it private for security reasons -> cannot be accessed by other classes
  private googleMap: google.maps.Map;

  // initialize the map
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Generic function to add marker for a user or a company
  // another way to do this -> (object: User | Company)
  // in the above method, TS compiler checks and only allows access to the properties common to both User and Company (name, companyName will not be allowed)
  addMarker(mappable: locationObject): void {
    // create a marker -> read type def file for all available options
    new google.maps.Marker({
      // we need to specify on which map we want to add the marker (can have multiple maps)
      map: this.googleMap,

      // position to specify the lat/lng
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
