import React from 'react';
import {Canvas} from '@react-three/fiber';

type Props = {
    width: number;
    length: number;
    height: number;
};

const RoomWireframe: React.FC<Props> = ({width, length, height}) => (
    <Canvas camera={{position: [0, height, length * 1.5]}}>
        <ambientLight/>
        <mesh position={[width / 2, height / 2, length / 2]}>
            <boxGeometry args={[width, height, length]}/>
            <meshBasicMaterial color="skyblue" wireframe/>
        </mesh>
    </Canvas>
);

export default RoomWireframe;

