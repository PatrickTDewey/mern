import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Chat from '../components/Chat'
import SetName from '../components/SetName'

const Main = () => {
  const [name, setName] = useState()
  const chooseName = (input) => {
    setName(input)
  }
  return (
     name?<Chat name={name}/>:<SetName onSubmit={chooseName} />
  )
}
export default Main