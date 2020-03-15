import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/Container'

const Users = () => {
  const { id } = useParams()
  return (
    <Container>
      <h2>User: {id}</h2>
    </Container>
  )
}

export default Users
