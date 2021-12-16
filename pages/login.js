import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
    const router = useRouter()
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
               router.push('/')
           }
       })
    }, []) // eslint-disable-line

    return(
        <Wrapper>
            <UberLogo src="https://i.ibb.co/7bjbWtL/uber-logo.jpg" alt="uber-logo"/>
            {/* <img src="https://i.ibb.co/6Zx5PXn/Uber-Driver-Partner-Thank-You.gif" alt="Uber-Driver-Partner-Thank-You" border="0"></img> */}
            {/* <img src="https://i.ibb.co/N9D0PZ0/uaerlogin.webp" alt="uaerlogin" border="0"></img> */}
            <Title>Log in to Access your Account</Title>
            <HeadImage src="https://i.ibb.co/N9D0PZ0/uaerlogin.webp" alt="Uber-Driver-Partner-Thank-You" />
        <SignInButton onClick={()=> signInWithPopup(auth, provider)}>
            Sign in With Google
        </SignInButton>
        </Wrapper>
    )
}

export default Login
const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-blue-100
`

const SignInButton = tw.button`
bg-blue-700 text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start `

const Title = tw.div`
text-5xl pt-4 text-blue-500
`
const HeadImage = tw.img`
object-contain h-60
`
const SecondImg = tw.img`
object-contain w-full
`