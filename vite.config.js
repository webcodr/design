import { defineConfig } from 'vite';

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
                    // Check the extension of the asset, adjust the regular expression as needed
                    if (/\.(ttf|otf|eot|woff|woff2)$/.test(assetInfo.name)) {
                        // Prevent renaming by returning the original file name
                        return 'fonts/[name][extname]';
                    }
                    // Default behavior for other assets
                    return 'assets/[name].[hash][extname]';
                },
            },
        },
    },
});
