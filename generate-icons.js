#!/usr/bin/env node
// generate-icons.js — run once to create all required app icons
// Usage: node generate-icons.js
// Requires: npm install canvas

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outDir = path.join(__dirname, 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const r = size * 0.22;

  // Background gradient (blue to purple)
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#4f9cf0');
  grad.addColorStop(1, '#9b6fff');
  ctx.fillStyle = grad;

  // Rounded rect
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // Wave emoji
  ctx.font = `${size * 0.55}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🌊', size / 2, size / 2 + size * 0.04);

  return canvas.toBuffer('image/png');
}

sizes.forEach(size => {
  const buf = drawIcon(size);
  const file = path.join(outDir, `icon-${size}.png`);
  fs.writeFileSync(file, buf);
  console.log(`✅ icon-${size}.png`);
});

console.log('\nAll icons generated in ./icons/');
