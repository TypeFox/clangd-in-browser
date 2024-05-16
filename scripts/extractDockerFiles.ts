import child_process from "node:child_process";

child_process.execFileSync('docker', [ 'create', '--name', 'extract-clangd', 'clangd-in-browser-clangd-build' ]);
child_process.execFileSync('docker', [ 'cp', 'extract-clangd:/builder/llvm-project/build/bin/clangd.js', './public/wasm']);
child_process.execFileSync('docker', [ 'cp', 'extract-clangd:/builder/llvm-project/build/bin/clangd.wasm', './public/wasm']);
child_process.execFileSync('docker', [ 'cp', 'extract-clangd:/builder/llvm-project/build/bin/clangd.worker.js', './public/wasm']);
child_process.execFileSync('docker', [ 'cp', 'extract-clangd:/builder/llvm-project/build/bin/clangd.worker.mjs', './public/wasm']);
child_process.execFileSync('docker', [ 'rm', 'extract-clangd']);
