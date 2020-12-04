const fs = require('fs');
const path = require('path');



module.exports = {
  getPeople,  //az összes people adatot
  getPeopleId,  //id szerint egy people adatot
  getPlanet,   //az összes planet adatot
  getPlanetId, //id szerint egy planet adatot
  getresidents  //egy planet összes lakóját (residents)
};