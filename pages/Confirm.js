import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './component/map'


const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCordinates = () => {
        const pickup = "Indore"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A",
            limit:1
        }))
            .then(response => response.json())
            .then(data => {
                
                setPickupCoordinates(data.features[0].center)
        })
    }
    const getDropoffCordinates = () => {
        const dropoff = "Bhopal"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A",
            limit:1
        }))
            .then(response => response.json())
            .then(data => {
            
            setDropoffCoordinates(data.features[0].center)
        })
    }
    
    useEffect(() => {
        getPickupCordinates();
        getDropoffCordinates();
       
    }, [])

    return (
        <Wrapper>
            <Map pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={ dropoffCoordinates}/>
            <CarsContainer>
                Ride Slector Confirm Button
                {/* {pickupCoordinates}
            <br/>
                {dropoffCoordinates} */}
            </CarsContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const CarsContainer = tw.div`
flex-1 
`