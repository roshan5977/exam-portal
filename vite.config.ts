import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['*'], // ✅ Allow ALL domains (use only for development)
    host: true           // ✅ Needed for access from external tunnel
  }
});
