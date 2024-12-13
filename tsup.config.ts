import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/main.ts"],
    target: "esnext",
    format: ["esm"],
    dts: {
        resolve: true,
        entry: "src/main.ts",
    },
    splitting: true,
    sourcemap: true,
    clean: true,
});
