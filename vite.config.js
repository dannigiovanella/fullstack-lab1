import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                //process.cwd = Hämtar aktuell arbetskatalog. slipper skriva sökväg
                main: resolve(process.cwd(), 'index.html'),
                bootstrap: resolve(process.cwd(), 'bootstrap.html'),
                tailwind: resolve(process.cwd(), 'tailwind.html'),
                publish: resolve(process.cwd(), 'publish.html')
            }
        }
    }
})