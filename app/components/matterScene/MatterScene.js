"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    // Matter.js modules
    const { Engine, Render, World, Bodies, Runner } = Matter;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;

    // Create renderer
    const render = Render.create({
      element: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#111",
      },
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Add bodies
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Walls
    const walls = [
      Bodies.rectangle(width / 2, 0, width, 50, { isStatic: true }), // Top
      Bodies.rectangle(width / 2, height, width, 50, { isStatic: true }), // Bottom
      Bodies.rectangle(0, height / 2, 50, height, { isStatic: true }), // Left
      Bodies.rectangle(width, height / 2, 50, height, { isStatic: true }), // Right
    ];

    World.add(world, walls);

    // Falling circles
    const createCircle = () =>
      Bodies.circle(Math.random() * width, -50, Math.random() * 20 + 10, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 80%, 60%)`,
        },
      });

    const circles = Array.from({ length: 20 }, createCircle);
    World.add(world, circles);

    // Clean up on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      canvas.innerHTML = "";
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default MatterScene;
