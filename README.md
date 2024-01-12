# vite-leptos-template

A vite starter template for creating [Leptos](https://leptos.dev/) projects.

## Prerequisites

Rust nightly toolchain and [trunk](https://trunkrs.dev/).
```sh
rustup toolchain install nightly
rustup override set nightly
cargo binstall trunk
```

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

## Use this template

```sh
npx degit chenhunghan/vite-leptos-template my-project
cd my-project

rustup toolchain install nightly
rustup override set nightly
cargo binstall trunk

npm run dev
```
