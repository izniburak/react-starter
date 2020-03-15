import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import Container from './Container'

const AuthContainer = props => {
  const { children, auth, loginPage = 'login' } = props
  const location = useLocation()
  return (
    <Container>
      {!auth && loginPage && (
        <Redirect
          to={{
            pathname: `/${loginPage}`,
            state: { from: location }
          }}
        />
      )}
      {auth && children}
    </Container>
  )
}

export default AuthContainer
