import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/Car-list'


const RideSelector = () => {
    return (
        <Wrapper>
            <Title>
                Choose a ride or swip up for more
            </Title>
            <CarList>
                {carList.map((car, index)=>(
                
                    <Car key={index}>
                        <CarImage src={car.imgUrl} alt="Alto-800-Car-png" />
                        <CarDetails>
                            <Service> { car.CarName}</Service>
                            <Time>{ car.Time}</Time>
                        </CarDetails>
                        <Price> { car.Rent}</Price>

                    </Car>
                ))}
            
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1
`
const Title = tw.div`
text-white text-center text-xs py-2 border -b bg-blue-400
`
const CarList = tw.div`

`
const Car = tw.div`
flex p-3 items-center
`
const CarImage = tw.img`
h-14 mr-2
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