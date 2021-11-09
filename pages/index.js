
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './component/map'
import Link from "next/link"


export default function Home() {


  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header  */}
        <Header>
          <UserLogo src="https://i.ibb.co/7bjbWtL/uber-logo.jpg" alt="uber-logo" ></UserLogo>

          <Profile>
            <Name>Prashant Chouhan</Name>
            <UserImage src="https://i.ibb.co/R6Kb4nW/IMG-20190530-WA0020.jpg"></UserImage>
          </Profile>
        </Header>
        <ActionButtons>

          <Link href="/Search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/KLh17VC/pngegg.png" alt="car-texi-img"></ActionButtonImage>

              Ride
            </ActionButton>
          </Link>
          <Link href="/Search">

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/3FKt27r/taxi-app-png.png" alt="taxi-app-png"></ActionButtonImage>
              Wheels
            </ActionButton>
          </Link>
          <Link href="/Search">

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/yPpssjj/Png-Item-273860.png" alt="Png-Item-273860"></ActionButtonImage>
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>

        {/* InputButtons  */}

        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between item-center
`
const UserLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
  mx-4 w-20 text-lg
`
const UserImage = tw.img`
h-20 w-20 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
 flex 
`
const ActionButton = tw.div`
 flex bg-blue-400 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-blue-200 text-2xl p-4 flex items-center mt-8`