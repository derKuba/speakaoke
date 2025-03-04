import fs from "fs";
import path from "path";

// Quell- und Zielpfad definieren
const sourceDir = path.resolve("node_modules/reveal.js/dist/theme");
const targetDir = path.resolve("public/reveal-themes");

// Sicherstellen, dass das Zielverzeichnis existiert
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Alle CSS-Dateien von Reveal.js kopieren
fs.readdirSync(sourceDir).forEach((file) => {
  if (file.endsWith(".css")) {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);

    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ Kopiert: ${file}`);
  }
});

console.log(
  "🎉 Alle Reveal.js-Themes wurden erfolgreich in den public-Ordner kopiert!"
);
