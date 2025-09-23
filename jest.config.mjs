export default {
  preset: "ts-jest",
  testEnvironment: "node",
  // Allow `import '../x.js'` in TS (NodeNext) to resolve to source `.ts`
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // Inline override so we keep a single tsconfig file in the repo
        tsconfig: {
          module: "CommonJS",
          moduleResolution: "Node",
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          noEmit: true,
        },
      },
    ],
  },
};
