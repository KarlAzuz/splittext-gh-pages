import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

// ...existing shader code...
// (Paste your full FRAG shader code here)
`;

export default function Aurora(props) {
  // ...existing Aurora component code...
}
