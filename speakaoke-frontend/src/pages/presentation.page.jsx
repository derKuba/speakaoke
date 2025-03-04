import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";

import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css"; // Basis CSS

import { marked } from "marked";

const PresentationPage = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = createSignal([]);

  let deck = null;

  createEffect(() => {
    const presentationData = localStorage.getItem("presentation");
    if (!presentationData) {
      console.error("⚠️ Keine Präsentationsdaten gefunden!");
      navigate("/");
      return;
    }

    const presentation = JSON.parse(presentationData);

    if (!presentation.slides || !Array.isArray(presentation.slides)) {
      console.error("⚠️ Fehler: Keine gültigen Slides!");
      navigate("/");
      return;
    }

    if (slides().length === 0) {
      // Nur setzen, wenn slides leer ist
      const slideBlocks = presentation.slides
        .filter((slide) => typeof slide === "string" && slide.trim() !== "")
        .join("\n")
        .split("---")
        .map((block) => marked.parse(block));

      setSlides(slideBlocks);
    }

    setTimeout(() => {
      if (!deck) {
        deck = new Reveal();
        deck.initialize({
          controls: true,
          progress: true,
          hash: true,
        });

        setTimeout(() => deck.sync(), 500);
      }
    }, 100);
  });

  onCleanup(() => {
    if (deck) deck.destroy();
  });

  return (
    <div>
      <a
        href="/"
        class="fixed bottom-4 left-4 text-gray-400 text-sm 
               hover:text-gray-600 transition-opacity opacity-50 hover:opacity-100
               z-50 p-2"
        style="pointer-events: auto;"
      >
        &larr; Zurück zur Hauptseite
      </a>
      <div class={`reveal`}>
        <div class="slides">
          {slides().map((html, index) => (
            <section key={index} innerHTML={html}></section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;
