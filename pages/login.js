import styled from 'styled-components'
import Head from 'next/head'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }
  
  
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png" />
        <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
`
const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`