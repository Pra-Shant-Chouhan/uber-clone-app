import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/Car-list'


const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        // get ride duration from Mapbox API 
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYml0dDJib3NzIiwiYSI6ImNrdm92cmgybDFtdDYzM291bDI4MWR3M2EifQ.xARQn4SSbvQdEM4yrDkm4A`)
            .then(response => response.json())
            .then(data => {
                    setRideDuration(data.routes[0].duration/100) 
            })

    }, [pickupCoordinates,dropoffCoordinates])
    return (
        <Wrapper>
            <Title>
                Choose a ride or swip up for more
            </Title>
            <CarList>
                {carList.map((car, index) => (

                    <Car key={index}>
                        <CarImage src={car.imgUrl} alt="Alto-800-Car-png" />
                        <CarDetails>
                            <Service> {car.CarName}</Service>
                            <Time>{car.Time}</Time>
                        </CarDetails>
                        <Price> {(rideDuration* car.multiplier).toFixed(0)+ 'Rs'}</Price>

                    </Car>
                ))}

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-white text-center text-xs py-2 border -b bg-blue-400
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-3 items-center
`
const CarImage = tw.img`
h-14
 mr-2
`
const CarDetails = tw.div`
flex-1 
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-700
`
const Price = tw.div`

`