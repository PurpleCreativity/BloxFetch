import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/main.ts"],
    target: "esnext",
    format: ["esm"],
    dts: {
        resolve: true,
        entry: "src/index.ts",
    },
    splitting: true,
    sourcemap: true,
    clean: true,
});
