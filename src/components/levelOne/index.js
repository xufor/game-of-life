import React, { useRef, useState } from 'react';
import { Stage, Sprite, Container, useTick } from '@inlet/react-pixi';
import soul from '../../resources/soul.png';

function Soul() {
  const [y, setY] = useState(10);
  const deltaYIntensity = useRef(1);

  useTick((_) => {
    setY((prev) => {
      if (prev <= 0 || prev >= 20) deltaYIntensity.current *= -1;
      return prev + deltaYIntensity.current;
    });
  });

  return (
    <Sprite image={soul} height={50} width={50} x={0} y={y}/>
  );
}

export default function LevelOne() {
  return (
    <Stage width={1000} height={500}>
      <Container position={[10, 400]}>
        <Soul />
      </Container>
    </Stage>
  );
}
