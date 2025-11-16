import { readdirSync, statSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';

const projectRoot = process.cwd();
const pagesDir = join(projectRoot, 'src', 'pages');
const outputLocale = process.argv[2] || 'bn';
const outputBase = join(pagesDir, outputLocale);

const excludeDirs = new Set([outputLocale]);

function walk(dir, relative = '') {
  const full = join(dir, relative);
  const entries = readdirSync(full, { withFileTypes: true });
  for (const entry of entries) {
    const relPath = join(relative, entry.name);
    const fullPath = join(dir, relPath);
    if (entry.isDirectory()) {
      if (excludeDirs.has(entry.name)) continue;
      walk(dir, relPath);
    } else if (entry.isFile()) {
      if (!entry.name.endsWith('.astro')) continue;
      if (entry.name.startsWith('_')) continue;
      const outPath = join(outputBase, relPath);
      mkdirSync(dirname(outPath), { recursive: true });
      const src = readFileSync(fullPath, 'utf8');
      // Minimal transform: ensure changeLanguage is set to target locale if present
      const transformed = src.replace(/changeLanguage\(["'](en|bn)["']\)/g, `changeLanguage('${outputLocale}')`);
      writeFileSync(outPath, transformed, 'utf8');
      console.log('Generated:', outPath);
    }
  }
}

mkdirSync(outputBase, { recursive: true });
walk(pagesDir);
console.log(`Localized pages generated under: ${outputBase}`);