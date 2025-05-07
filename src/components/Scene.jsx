import React from "react";

export default function Scene(){
    return (
        <>
        {/*Ground Plane*/}
            <mesh rotation={[-Math.PI/2, 0, 0]} receive shadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="lightgreen" />
            </mesh>

        </>
    )
}