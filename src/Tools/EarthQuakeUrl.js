//es6 Class Syntax

class EarthQuakeUrl {
  
  constructor(parameters = {}){

    this.parameters = {
      starttime: "2019-10-9",
      ...parameters,
    }
  }
  getUrl() {
    let prefix = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson`;
    let properties = Object.getOwnPropertyNames(this.parameters);
    const values = Object.values(this.parameters);
    properties = properties.map( (prop,i) => {
      return `${prop}=${values[i]}`
    })
    return [prefix,properties].flat().join('&');
  }
}

export default EarthQuakeUrl;