# Qwik Start

Qwik Start is a composable meta-framework designed for building modern web applications, with support for Qwik core. It is built on top of Vite for fast development and building.

We leverage Nitro and H3 to focus on improving Qwik Start without needing to maintain deployment providers, runtimes, and storage providers. Qwik Start's main focus is on routing, middleware, data fetching, server functions, and more.

## Features

- **Composable Architecture**: Easily combine multiple tools, frameworks, or services.
- **Qwik Integration**: Seamless support for Qwik core.
- **Vite-Powered**: Lightning-fast development server and optimized builds.
- **H3 & Nitro Integration**: Out-of-the-box support for modern server APIs, middleware, and deployment flexibility.
- **Monorepo Setup**: Organized with `app/` for consumer facing side and `core/` where the main logic for Qwik Start is located.

## Project Structure

- `app/`: Contains the Qwik application with routing, components, and pages.
- `core/`: Core framework code (currently under development).
- `pnpm-workspace.yaml`: Defines the monorepo workspaces.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-org/qwik-start.git
   cd qwik-start
   ```

2. Install dependencies using pnpm:
   ```
   pnpm install
   ```

## Usage

### Development

```
pnpm --filter app dev
```

### Building

```
pnpm --filter app build
```

### Preview

```
pnpm --filter app preview
```

(Note: Preview script may need to be added if not present.)

## Contributing

Contributions are welcome! Please open an issue or pull request on GitHub.

## License

This project is licensed under the MIT License.
