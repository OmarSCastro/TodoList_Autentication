import React from 'react'
import { Container } from '../../components/Container/Container'
import { VideoExample } from '../../components/VideoExample/VideoExample'

export const ClassPage = () => {
  return (
    <Container>
      <div className='flex justify-content-center'>

      <VideoExample url='https://www.youtube.com/watch?v=RlGCUzKLO1Y' />
      </div>
    </Container>
  )
}
