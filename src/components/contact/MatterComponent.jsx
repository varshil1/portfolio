import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const MatterComponent = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Create engine and renderer
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false
      }
    });

    // Create bodies
    const ground = Matter.Bodies.rectangle(400, 600, 810, 60, { isStatic: true });
    const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
    const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);

    Matter.World.add(engine.world, [boxA, boxB, ground]);

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    Matter.World.add(engine.world, mouseConstraint);

    // Add additional bodies
    const platform = Matter.Bodies.rectangle(1200, 500, 300, 20, { isStatic: true });
    const stack = Matter.Composites.stack(1100, 270, 4, 4, 0, 0, (x, y) => {
      return Matter.Bodies.polygon(x, y, 8, 30);
    });
    const ball = Matter.Bodies.circle(300, 600, 20);
    const sling = Matter.Constraint.create({
      pointA: { x: 300, y: 600 },
      bodyB: ball,
      stiffness: 0.05
    });

    Matter.World.add(engine.world, [platform, stack, ball, sling]);

    // Event listener for firing the ball
    let firing = false;
    Matter.Events.on(mouseConstraint, 'enddrag', (e) => {
      if (e.body === ball) firing = true;
    });

    // Run the engine and renderer
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    // Cleanup on component unmount
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div ref={sceneRef} />
  );
};

export default MatterComponent;
