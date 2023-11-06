import { useState } from 'react'
import {OBJModel,DirectionLight, MTLModel, Tick} from 'react-3d-viewer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OBJModel src="./src/11.obj" width="400" height="400"  
        texPath=""/>
      <DirectionLight color={0xffffff} position={{x:0,y:0,z:0}}/>
      
      <MTLModel
        enableZoom={false}
        position={{x:0,y:0,z:0}}
        rotation={{x:0,y:0,z:0}}
        width={600}
        height={600}
        mtl='/src/assets/MitulFaceSmile.mtl'
        src='/src/assets/MitulFaceSmile.obj'
        texPath='/src/assets/'
      />



      

    </>
  )
}

export default App
