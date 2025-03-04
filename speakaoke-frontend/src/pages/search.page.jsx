import { createSignal } from "solid-js";

import { useNavigate } from "@solidjs/router";
import logoImage from "../assets/logo.webp";

import { applicationStore } from "../store/app-store";
import ThemeChooser from "../components/theme-chooser";

const SearchPage = () => {
  const [keyword, setKeyword] = createSignal("");
  const [error, setError] = createSignal(null);
  const [isLoading, setIsLoading] = createSignal(false);

  const { applicationState } = applicationStore;

  const navigate = useNavigate();

  const fetchPresentation = async () => {
    if (!keyword().trim()) {
      setError("Bitte ein Keyword eingeben.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const existingTheme = document.getElementById("reveal-theme");
      if (existingTheme) {
        existingTheme.href = `/reveal-themes/${applicationState.theme}.css`;
      } else {
        const themeLink = document.createElement("link");
        themeLink.rel = "stylesheet";
        themeLink.id = "reveal-theme";
        themeLink.href = `/reveal-themes/${applicationState.theme}.css`;
        document.head.appendChild(themeLink);
      }
    } catch (e) {
      console.log(`error on setting theme ${e.message}`);
    }

    try {
      const res = await fetch("http://localhost:4000/presentation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword() }),
      });
      if (!res.ok) throw new Error("Fehler beim Abrufen der Präsentation");
      const data = await res.json();
      localStorage.setItem("presentation", JSON.stringify(data));
      navigate(`/presentation/${keyword()}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <img src={logoImage} alt="Logo" class="w-125 h-125 mb-6 object-contain" />
      <h1 class="text-2xl font-semibold mb-4">Worüber möchtest du sprechen?</h1>
      <input
        type="text"
        placeholder="Keyword eingeben..."
        value={keyword()}
        onInput={(e) => setKeyword(e.target.value)}
        class="border border-gray-300 px-4 py-2 rounded w-full max-w-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <br />

      <ThemeChooser />

      <button
        onClick={fetchPresentation}
        disabled={isLoading()}
        class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Präsentation generieren
      </button>
      {isLoading() && (
        <div class="flex items-center space-x-2 mt-4">
          <div class="w-5 h-5 border-2 border-blue-500 border-t-transparent border-l-transparent rounded-full animate-spin" />
          <span>Generiere Präsentation...</span>
        </div>
      )}
      {error() && <p class="text-red-500 mt-4">{error()}</p>}
    </div>
  );
};

export default SearchPage;
