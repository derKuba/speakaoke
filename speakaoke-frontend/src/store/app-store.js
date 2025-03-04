import { createRoot } from "solid-js";
import { createStore } from "solid-js/store";

export const applicationStore = createRoot(() => {
  const [applicationState, setApplicationState] = createStore({
    theme: "",
  });
  return { applicationState, setApplicationState };
});
