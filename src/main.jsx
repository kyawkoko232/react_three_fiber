import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas 
    camera={ { 
      fov : 45,
      near : 0.1,
      position: [10,3,25]
    } }
    > 
        <Experience />
    </Canvas>

  </React.StrictMode>,
)
