import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="container">
      <ShaderGradientCanvas
        className="shader-canvas"
        pixelDensity={1}
        fov={45}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={0.6}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#606080"
          color2="#8d7dca"
          color3="#212121"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      <div className="content">
        <h1 className="headline">
          <span className="headline-large">Basic model in.</span><br />
          <span className="headline-medium">Novel model out.</span>
        </h1>
        <p className="secondary-text-2">
          Through scalable, deep research, we enhance and improve your models to reach their absolute peak.
        </p>
        <p className="tertiary-text">
          <Link to="/blog" className="link-button">blog</Link>{' '}
          <a href="mailto:info@tropiflo.io?subject=Careers Inquiry" className="link-button">careers</a>{' '}
          <a href="mailto:Sales@tropiflo.io?subject=Corporate Inquiry" className="link-button">corporate</a>
        </p>
      </div>
    </div>
  )
}

export default App

