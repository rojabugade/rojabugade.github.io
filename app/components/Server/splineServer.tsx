// This is a Server Component
import dynamic from "next/dynamic";

// Import the Spline component with SSR disabled
const SplineComponent = dynamic(() => import("../Client/spline"), {
  ssr: false,
});

interface SplineSceneServerProps {
  scene: string;
  className?: string;
}

export default function SplineSceneServer({
  scene,
  className,
}: SplineSceneServerProps) {
  return <SplineComponent scene={scene} className={className} />;
}
