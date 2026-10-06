import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// The Polymer 2 elements are loaded through HTML imports, which Vite cannot
// bundle. Vite emits the files linked from index.html as hashed assets; the
// files they import in turn (by absolute path) are copied verbatim into the
// build output.
const staticFiles = [
  'polymer-singleton-a.html',
  'polymer-singleton-b.html',
  'bower_components',
];

export default defineConfig({
  server: { port: 5000 },
  plugins: [
    {
      name: 'copy-html-imports',
      apply: 'build',
      closeBundle() {
        for (const file of staticFiles) {
          cpSync(resolve(file), resolve('dist', file), { recursive: true });
        }
      },
    },
  ],
});
