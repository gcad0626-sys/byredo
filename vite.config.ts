import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-org-img',
      configureServer(server) {
        server.middlewares.use('/org/img', (req, res, next) => {
          // req.url contains the path after /org/img (e.g. /logo.png)
          const filePath = path.join(__dirname, 'org/img', req.url || '');
          if (fs.existsSync(filePath)) {
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
          } else {
            next();
          }
        });
      }
    }
  ],
})
