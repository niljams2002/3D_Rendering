import { useState } from 'react'
import {OBJModel,DirectionLight} from 'react-3d-viewer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width:"100vw", display:"flex", justifyContent:"center"}}>
      <OBJModel src="./src/11.obj" width="400" height="400"  
        texPath=""/>
      
    </div>

    </>
  )
}

export default App
