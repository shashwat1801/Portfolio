"use client"

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload }  from "@react-three/drei";
import * as random from "maath/random"
import { Points as ThreePoints } from "three";


type StarBackgroundProps = React.ComponentPropsWithoutRef<"group">;

const StarBackground: React.FC<StarBackgroundProps> = (props) => {
    const ref = useRef<ThreePoints>(null);
    const [sphere] = useState<Float32Array>(() => 
        random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array
);
    
    useFrame((_, delta) => {
        if (ref.current) {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
        }
    });
  
    return (
    <group rotation = {[0,0, Math.PI / 4]}>
        <Points
        ref = {ref}
        positions={sphere}
        stride = {3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color = "#fff"
                size = {0.002}
                sizeAttenuation = {true}
                depthWrite = {false}
            />
            <Preload all />
        </Points>
    </group>
  );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera = {{position: [0, 0, 1]}} className = "w-full h-full">
            <Suspense fallback = {null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
)
export default StarsCanvas;