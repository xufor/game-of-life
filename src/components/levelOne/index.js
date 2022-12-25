import { Container, Sprite, useTick } from '@inlet/react-pixi';
import React, { useEffect, useRef, useState } from 'react';
import soul from '../../resources/soul.png';

function Soul() {
  const [y, setY] = useState(10);
  const deltaY = useRef(1);

  useTick((_) => {
    setY((prev) => {
      if (prev <= 0 || prev >= 20) deltaY.current *= -1;
      return prev + deltaY.current;
    });
  });

  return <Sprite image={soul} height={50} width={50} x={0} y={y} />;
}

export default function LevelOne({ keyPressed }) {
  const [spriteContainerX, setSpriteContainerX] = useState(10);

  useEffect(() => {
    if (keyPressed.value === 'ArrowRight') {
      setSpriteContainerX(spriteContainerX + 1);
    }
  }, [keyPressed.value, spriteContainerX]);

  return (
    <Container position={[spriteContainerX, 400]}>
      <Soul/>
    </Container>
  );
}
