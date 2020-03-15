import React, { useEffect, useCallback } from 'react'
import withAppContext from '../../Contexts/App/withAppContext'
import Container from '../../Components/Container'

const About = props => {
  const {
    context: { dispatch, actions }
  } = props

  const loading = useCallback(() => {
    console.log('loading function...')
    dispatch(actions.appStatus(actions.APP_STATUS_TYPE.SUCCESS))
  }, [dispatch, actions])

  useEffect(() => {
    loading()
    console.log('About component mounted...')
    return () => {
      console.log('About component Unmounted...')
    }
  }, [loading])

  return (
    <Container>
      <h1>About Page</h1>
    </Container>
  )
}

export default withAppContext(About)
