import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"



const Search = () => {
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")
    return (
        <Wrapper>
            {/* Button container  */}
            <ButtonContainer>
                <Link href="/" passHref>
                    <BackButton src="https://img.icons8.com/fluency/48/000000/left.png"></BackButton>
                </Link>
                Back to Home
            </ButtonContainer>
            {/* INput Container  */}
            <InputContainer>
                <FromToIcon>
                    <Circle src="https://img.icons8.com/fluency/48/000000/circled.png" alt=""></Circle>

                    <Line src="https://img.icons8.com/color/50/000000/vertical-line.png" alt=""></Line>

                    <LocationIcon src="https://img.icons8.com/ultraviolet/40/000000/place-marker--v2.png" alt=""></LocationIcon>

                </FromToIcon>

                <InputBoxes>
                    <Input
                        placeholder="Enter Pick up Location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}>
                    </Input>
                    <Input
                        placeholder="Where to"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}>
                    </Input>
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ultraviolet/40/000000/add--v2.png"></PlusIcon>
            </InputContainer>

            {/* saved places  */}

            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/000000/star--v2.png">

                </StarIcon>
                Saved Places
            </SavedPlaces>
            {/* Confirm Location  */}
            <Link href={{
                pathname: "/Confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}passHref>
                <ConfirmLocation>
                    Confim that Location
                </ConfirmLocation>
            </Link>

        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-blue-200 h-screen
`
const ButtonContainer = tw.div`
bg-blue-100 px-4  my-2 flex  items-center  
`
const BackButton = tw.img`
h-12  transform hover:scale-105 transition
`
const FromToIcon = tw.div`
w-10 flex flex-col mx-2 items-center
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2 rounded-full
`
const Circle = tw.img`
h-3.5
`
const Line = tw.img`
h-10
`
const LocationIcon = tw.img`
h-3.5
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-blue-100 my-2 rounded-2 p-2  outline-none border-none
`
const PlusIcon = tw.img`
w-10 h-10 ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-4 rounded-full
`
const StarIcon = tw.img`
bg-blue-400 w-10 h-10 p-1 rounded-full mx-3
`
const ConfirmLocation = tw.div`
bg-blue-700 flex flex-1 items-center align-center justify-center py-3 rounded-full my-2
`

export default Search
