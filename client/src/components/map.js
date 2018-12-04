import React, {Component} from 'react';

import './map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component{
    state={
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
    }
    
    componentDidMount(){
       this.renderMap()
    }

    renderMap = ()=>{
     loadscript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBRXusdnSXqaOw6E3Ac2xd061C2Z5N4gk0&callback=initMap")
     window.initMap = this.initMap


    }

    initMap = ()=> {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.7767, lng: 96.7970},
          zoom: 8
        });

        const marker = new window.google.maps.Marker({
            position: {lat:32.9619, lng: 96.9961},
            map:map
        })
        const marker1 = new window.google.maps.Marker({
            position: {lat:32.9117, lng: 96.9907},
            map:map
        })
      }
    render(){
     return(
       <main>
        <div id="map"></div>

      </main>
        

     )

    }
}


function loadscript(url){
 let index = window.document.getElementsByTagName("script")[0]
 let script = window.document.createElement("script")
 script.src = url
 script.async = true
 script.defer = true
 index.parentNode.insertBefore(script, index)

}

