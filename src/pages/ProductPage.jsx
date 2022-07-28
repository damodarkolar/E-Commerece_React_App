import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductPage = () => {

    const id=useParams()
    console.log(id)
  return (
    <div>ProductPage</div>
  )
}
