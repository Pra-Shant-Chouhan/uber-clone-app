import react, { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            // style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [75.855713, 22.718670],
            zoom: 3
        });
    });
    return (
        <Wrapper id="map"></Wrapper>
    )
}
const Wrapper = tw.div`
bg-red-500 flex-1
`

export default Map
