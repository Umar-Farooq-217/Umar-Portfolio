// "use client";
// import { useEffect, useRef } from 'react';
// import Matter from 'matter-js';
// import 'matter-attractors';
// import 'matter-wrap';

// export default function MatterScene() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Ensure plugins are registered only in the browser
//     if (typeof window !== 'undefined') {
//       Matter.use('matter-attractors');
//       Matter.use('matter-wrap');

//       // Set up Matter.js engine, renderer, and world
//       const engine = Matter.Engine.create();
//       const world = engine.world;

//       const render = Matter.Render.create({
//         element: canvasRef.current,
//         engine: engine,
//         options: {
//           width: 800,
//           height: 600,
//           wireframes: false,
//         },
//       });

//       // Add example bodies
//       const circle = Matter.Bodies.circle(400, 200, 50, {
//         plugin: {
//           attractors: [
//             (bodyA, bodyB) => {
//               return {
//                 x: (bodyA.position.x - bodyB.position.x) * 0.0001,
//                 y: (bodyA.position.y - bodyB.position.y) * 0.0001,
//               };
//             },
//           ],
//         },
//       });

//       const ground = Matter.Bodies.rectangle(400, 600, 810, 60, { isStatic: true });

//       Matter.World.add(world, [circle, ground]);
//       Matter.Render.run(render);
//       Matter.Runner.run(Matter.Runner.create(), engine);

//       // Cleanup
//       return () => {
//         Matter.Render.stop(render);
//         Matter.World.clear(world);
//         Matter.Engine.clear(engine);
//         render.canvas.remove();
//         render.textures = {};
//       };
//     }
//   }, []);

//   return <div ref={canvasRef}></div>;
// }
