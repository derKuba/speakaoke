import { applicationStore } from "../store/app-store";

const ThemeChooser = () => {
  const { applicationState, setApplicationState } = applicationStore;

  const themes = [
    { name: "Black", value: "black", bg: "bg-black text-white" },
    {
      name: "White",
      value: "white",
      bg: "bg-white text-black border border-gray-300",
    },
    { name: "League", value: "league", bg: "bg-gray-900 text-white" },
    { name: "Sky", value: "sky", bg: "bg-blue-400 text-black" },
    { name: "Beige", value: "beige", bg: "bg-yellow-200 text-black" },
    { name: "Simple", value: "simple", bg: "bg-gray-200 text-black" },
    {
      name: "Serif",
      value: "serif",
      bg: "bg-gray-100 text-black border border-gray-400",
    },
    { name: "Solarized", value: "solarized", bg: "bg-green-600 text-white" },
    { name: "Blood", value: "blood", bg: "bg-red-600 text-white" },
    { name: "Moon", value: "moon", bg: "bg-gray-800 text-white" },
    { name: "Night", value: "night", bg: "bg-gray-900 text-white" },
  ];

  return (
    <div class="grid grid-cols-3 gap-2 max-w-md mb-4">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => {
            setApplicationState("theme", theme.value);
          }}
          class={`p-4 rounded-lg text-center text-sm font-medium cursor-pointer transition-all
              ${theme.bg} ${
            applicationState.theme === theme.value
              ? "ring-4 ring-blue-500 scale-105"
              : "opacity-75 hover:opacity-100"
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeChooser;
