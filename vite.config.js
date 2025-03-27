import { defineConfig } from 'vite';

const fontRegex = /\.(ttf|otf|eot|woff|woff2)$/

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // or "modern"
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // Check if asset is a font
                    if (assetInfo.names.find(name => fontRegex.test(name))) {
                        // Prevent renaming fonts by returning the original file name
                        return 'fonts/[name][extname]';
                    }

                    // Default behavior for other assets
                    return 'assets/[name].[hash][extname]';
                },
            },
        },
    },
});
