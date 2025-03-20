// src/components/OverlayMarker.tsx
import React from 'react';

export interface OverlayMarkerProps {
  width?: string;
  height?: string;
  markerColor?: string;
  markerThickness?: number;
  markerLength?: string;
  perspective?: boolean; // if true, apply perspective transform
  perspectiveDistance?: string; // e.g., "800px"
  rotateX?: string; // e.g., "10deg"
  rotateY?: string; // e.g., "0deg" (new prop for horizontal rotation)
  style?: React.CSSProperties;
}

/**
 * OverlayMarker displays L-shaped corner markers.
 * If `perspective` is true, it applies a one-point perspective transform using
 * `perspectiveDistance`, `rotateX` and `rotateY` values.
 */
const OverlayMarker: React.FC<OverlayMarkerProps> = ({
  width = '200px',
  height = '200px',
  markerColor = 'red',
  markerThickness = 2,
  markerLength = '20px',
  perspective = false,
  perspectiveDistance = '800px',
  rotateX = '10deg',
  rotateY = '0deg',
  style = {},
  ...rest
}) => {
  // Full overlay covering the parent container
  const overlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    ...style,
  };

  // Adjust transform based on perspective flag and new props.
  const transformStyle = perspective
    ? `translate(-50%, -50%) perspective(${perspectiveDistance}) rotateX(${rotateX}) rotateY(${rotateY})`
    : 'translate(-50%, -50%)';

  // Centered container that defines the target area using provided width and height
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width,
    height,
    transform: transformStyle,
  };

  // Common style for each corner marker
  const commonCornerStyle: React.CSSProperties = {
    position: 'absolute',
    width: markerLength,
    height: markerLength,
    boxSizing: 'border-box',
  };

  // L-shaped markers for each corner:
  const topLeftStyle: React.CSSProperties = {
    ...commonCornerStyle,
    top: 0,
    left: 0,
    borderTop: `${markerThickness}px solid ${markerColor}`,
    borderLeft: `${markerThickness}px solid ${markerColor}`,
  };

  const topRightStyle: React.CSSProperties = {
    ...commonCornerStyle,
    top: 0,
    right: 0,
    borderTop: `${markerThickness}px solid ${markerColor}`,
    borderRight: `${markerThickness}px solid ${markerColor}`,
  };

  const bottomLeftStyle: React.CSSProperties = {
    ...commonCornerStyle,
    bottom: 0,
    left: 0,
    borderBottom: `${markerThickness}px solid ${markerColor}`,
    borderLeft: `${markerThickness}px solid ${markerColor}`,
  };

  const bottomRightStyle: React.CSSProperties = {
    ...commonCornerStyle,
    bottom: 0,
    right: 0,
    borderBottom: `${markerThickness}px solid ${markerColor}`,
    borderRight: `${markerThickness}px solid ${markerColor}`,
  };

  return (
    <div style={overlayStyles} {...rest}>
      <div style={containerStyle} data-testid="overlay-container">
        <div data-testid="corner-top-left" style={topLeftStyle} />
        <div data-testid="corner-top-right" style={topRightStyle} />
        <div data-testid="corner-bottom-left" style={bottomLeftStyle} />
        <div data-testid="corner-bottom-right" style={bottomRightStyle} />
      </div>
    </div>
  );
};

export default OverlayMarker;
