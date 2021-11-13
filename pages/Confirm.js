import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './component/map'
import { useRouter } from 'next/router'
import RideSelector from './component/RideSelector'


const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query


    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCordinates = (pickup) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A",
            limit: 1
        }))
            .then(response => response.json())
            .then(data => {

                setPickupCoordinates(data.features[0].center)
            })
    }
    const getDropoffCordinates = (dropoff) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A",
            limit: 1
        }))
            .then(response => response.json())
            .then(data => {

                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCordinates(pickup);
        getDropoffCordinates(dropoff);

    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates} />
            <CarsContainer>
                <RideSelector />
                <ConfirmButtonContainer>
                    Confirm Your RideX
                </ConfirmButtonContainer>
            </CarsContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col bg-blue-200
`
const CarsContainer = tw.div`
flex-1 flex flex-col bg-blue-200
`

const ConfirmButtonContainer = tw.div`
bg-blue-700 flex items-center align-center justify-center py-3 rounded-full my-2 hover:text-green-200 text-red-200
`