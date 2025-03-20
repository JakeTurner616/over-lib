# over-lib

over-lib is a very simple quadrilateral position overlay library for ReactJS/TS. It provides a customizable overlay with L-shaped corner markers to help correctly align items (e.g., credit cards, documents) within a camera view. It supports simple one-point perspective shift:

![over-lib overlay](docs\scan-overlay.gif)

## Features

- **Customizable Dimensions:** Easily set width, height, marker thickness, and marker length.
- **Color Customization:** Adjust marker colors to match your application's theme.
- **Perspective Effect:** Optionally simulate a one-point perspective with configurable distance and rotation (both vertical and horizontal).

## Installation

### Via npm (from GitHub)

Install the library directly from GitHub:

```bash
npm install git+https://github.com/JakeTurner616/over-lib.git
```

## Usage

After installing, import the component in your React project as follows:

```jsx
import React from 'react';
import { OverlayMarker } from 'over-lib';

const App = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <OverlayMarker
      width="200px"
      height="200px"
      markerColor="red"
      markerThickness={2}
      markerLength="20px"
      perspective={true}            // Adjust this to toggle the following props:
      perspectiveDistance="400px"  // Change the perspective depth
      rotateX="20deg"             // Change the vertical rotation
      rotateY="10deg"             // Change the horizontal rotation
    />
  </div>
);

export default App;
```

## Development

To clone and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/JakeTurner616/over-lib
   cd over-lib
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Demo Storybook:**

   ```bash
   npm run storybook
   ```

   This will launch the demo frontend storybook to easily interact with the component and its props.

## Building the Library (Rollup)

To build the component:

```bash
npm run build
```

## LICENSE

This project is licensed under the [MIT](./LICENSE) license.