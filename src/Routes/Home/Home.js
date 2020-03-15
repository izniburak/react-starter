import React, { useEffect } from 'react'
import withAppContext from '../../Contexts/App/withAppContext'
import Container from '../../Components/Container'

const Home = props => {
  const {
    context: { dispatch, actions }
  } = props

  useEffect(() => {
    dispatch(actions.appStatus(actions.APP_STATUS_TYPE.SUCCESS))
    console.log('Home component mounted...')
    return () => {
      console.log('Home component Unmounted...')
    }
  }, [dispatch, actions])

  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  )
}

export default withAppContext(Home)
