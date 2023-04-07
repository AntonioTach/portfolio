import React, { Component } from 'react';

// Background Universe
class Background extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate the position and size of the stars
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      stars.push({ x, y, size });
    }

    // ! Shooting stars will cause problems with RAM :(
    // Generate the positions and size of the shooting stars
    // const shootingStars = [];
    // for (let i = 0; i < 5; i++) {
    //   const x = Math.random() * canvas.width;
    //   const y = Math.random() * canvas.height;
    //   const size = Math.random() * 3;
    //   const speed = Math.random() * 5 + 2;
    //   shootingStars.push({ x, y, size, speed });
    // }

    const drawUniverse = () => {
      // Draw the background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(1, '#04002b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Put the stars
      for (let i = 0; i < stars.length; i++) {
        const { x, y, size } = stars[i];
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      // Put the shooting stars
    //   for (let i=0; i < shootingStars.length; i++) {
    //     const star = shootingStars[i];
    //     star.x -= star.speed;
    //     ctx.beginPath();
    //     ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    //     ctx.fillStyle = 'white';
    //     ctx.fill();
    //   }

      // Delete the shooting stars that are out of the canvas
    //   shootingStars.filter(star => star.x > -star.size);

      // Add new shooting Stars in random positions
    //   if (Math.random() < 0.03) {
    //     const x = canvas.width + Math.random() * 200;
    //     const y = Math.random() * canvas.height;
    //     const size = Math.random() * 3;
    //     const speed = Math.random() * 5 + 2;
    //     shootingStars.push({ x, y, size, speed });
    //   }

      // Repeat the
      requestAnimationFrame(drawUniverse);
    };

    drawUniverse();
  }

  render() {
    return <canvas ref="canvas" style={{ position: 'fixed' }} />;
  }
}

export default Background;
