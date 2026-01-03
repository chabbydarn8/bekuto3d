import { CylinderGeometry } from 'three'
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg'

export function useCsg() {
  function subtractCylinder(geometry: THREE.BufferGeometry) {
    const originalBrush = new Brush(geometry)
    originalBrush.updateMatrixWorld()

    const cylinderRadius = 2.5
    const cylinderHeight = 100
    const cylinderGeometry = new CylinderGeometry(cylinderRadius, cylinderRadius, cylinderHeight, 32)
    const cylinderBrush = new Brush(cylinderGeometry)
    cylinderBrush.updateMatrixWorld()

    const evaluator = new Evaluator()
    const result = evaluator.evaluate(originalBrush, cylinderBrush, SUBTRACTION)

    return result
  }

  return {
    subtractCylinder,
  }
}
