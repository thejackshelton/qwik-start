# Qwik Start

Qwik Start is a composable meta-framework designed for building modern web applications. It is built on top of Vite for fast development and building, H3 for lightweight HTTP handling, and Nitro for powerful server-side rendering and API capabilities. Leveraging Qwik's resumability, it enables efficient, scalable full-stack development in a monorepo structure.

## Features

- **Composable Architecture**: Easily mount nested apps and combine multiple frameworks or services.
- **Qwik Integration**: Resumable components for optimal performance and hydration.
- **Vite-Powered**: Lightning-fast development server and optimized builds.
- **H3 and Nitro**: Robust server-side handling with support for SSR, API routes, and more.
- **Monorepo Setup**: Organized with `app/` for the frontend application and `core/` for framework essentials.

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

To start the development server for the app:

```
pnpm --filter app dev
```

This runs Vite in SSR mode for the Qwik application.

### Building

To build the application:

```
pnpm --filter app build
```

### Preview

To preview the built application:

```
pnpm --filter app preview
```

(Note: Preview script may need to be added if not present.)

## Contributing

Contributions are welcome! Please open an issue or pull request on GitHub.

## License

This project is licensed under the MIT License.
