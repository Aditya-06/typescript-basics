import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

// create the map in the div containing id "map"
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
