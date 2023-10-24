import React, { createContext, useState } from 'react'

const ComponentesContext = createContext()

function ComponentesProvider({children}) {
    const [Informacion, setInformacion] = useState('')
    

  return (
    <ComponentesContext.Provider value={{Informacion,setInformacion}}>
        {children}
    </ComponentesContext.Provider>
  )
}
export {ComponentesContext, ComponentesProvider}