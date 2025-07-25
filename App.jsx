import React from "react";
import { createRoot } from "react-dom/client";
import { styled } from "@linaria/react";

const Global = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue";
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-image: linear-gradient(to bottom, var(--clr), var(--clr2));
    overflow: hidden;
    view-transition-name: circle;
  }

  svg {
    pointer-events: none;
  }

  @view-transition {
    navigation: auto;
  }

  ::view-transition-old(circle) {
    filter: url(#radialLight);
    animation: disintegrateOut 0.7s ease reverse forwards;
  }

  ::view-transition-new(circle) {
    filter: url(#radialLight);
    animation: disintegrateOut 0.7s ease forwards;
  }

  @keyframes disintegrateOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Section = styled.section`
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  display: flex;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 5vmax;
    height: 5vmax;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(60deg);
    pointer-events: none;
    background-image: url("assets/arrow.png");
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    filter: invert(1);
  }

  &::before {
    left: 2vmax;
    transform: translateY(-50%) rotate(-60deg) scaleX(-1);
  }

  &::after {
    right: 2vmax;
  }

  a {
    width: 50%;
    height: 100%;
    display: block;
    background-color: transparent;
  }
`;

const App = () => {
  return (
    <Global>
      <svg>
        <filter id="radialLight">
          <feFlood floodColor="white" result="whiteFill" />
          <feGaussianBlur in="whiteFill" stdDeviation="50" result="blurredLight" />
          <feBlend mode="multiply" in="SourceGraphic" in2="blurredLight" />
        </filter>
      </svg>
      <div style={{ "--clr": "#cfb59e", "--clr2": "#c6935a", "--bg": "url(assets/img-1.avif)" }}>
        <Section>
          <a href="index7.html" />
          <a href="index2.html" />
        </Section>
      </div>
    </Global>
  );
};

const mount = document.createElement("div");
document.body.appendChild(mount);
createRoot(mount).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
