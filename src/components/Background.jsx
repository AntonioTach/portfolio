import React, { Component } from 'react';

// Background Universe
class Background extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
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

    // Generate the positions and size of the shooting stars
    let shootingStars = [];
    for (let i = 0; i < 2; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      const speed = Math.random() * 5 + 2;
      shootingStars.push({ x, y, size, speed });
    }

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
      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i];
        star.x -= star.speed;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      // Delete the shooting stars that are out of the canvas and only mantain 2 shooting stars in the canvas.
      shootingStars = shootingStars.filter(star => star.x > -star.size && shootingStars.length <= 2);

      // Add new shooting Stars in random positions only 2 stars at a time
      if (shootingStars.length < 2 && Math.random() < 0.03) {
        const x = canvas.width + Math.random() * 200;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        const speed = Math.random() * 5 + 2;
        shootingStars.push({ x, y, size, speed });
      }
      requestAnimationFrame(drawUniverse);

      const planetX = canvas.width * 0.11;
      const planetY = canvas.height * 0.11;
      const planetRadius = canvas.width * 0.045;

      const planetGradient = ctx.createRadialGradient(planetX, planetY, planetRadius * 0.1, planetX, planetY, planetRadius);
      planetGradient.addColorStop(0, 'rgba(204, 164, 114, 1)');
      planetGradient.addColorStop(0.5, 'rgba(181, 129, 90, 0.8)');
      planetGradient.addColorStop(1, 'rgba(25, 25, 112, 0)');


      ctx.fillStyle = planetGradient;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetRadius, 0, Math.PI * 2);
      ctx.fill();

    };

    drawUniverse();
  }

  render() {
    return <canvas ref={this.canvasRef}  style={{ position: 'fixed' }} />;
  }
}

export default Background;
