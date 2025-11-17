declare module "@paper-design/shaders-react" {
  import { ComponentType } from "react"

  export interface MeshGradientProps {
    className?: string
    colors?: string[]
    speed?: number
    wireframe?: boolean
  }

  export interface DotOrbitProps {
    className?: string
    dotColor?: string
    orbitColor?: string
    speed?: number
    intensity?: number
  }

  export const MeshGradient: ComponentType<MeshGradientProps>
  export const DotOrbit: ComponentType<DotOrbitProps>
}

