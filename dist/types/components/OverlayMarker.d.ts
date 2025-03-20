import React from 'react';
export interface OverlayMarkerProps {
    width?: string;
    height?: string;
    markerColor?: string;
    markerThickness?: number;
    markerLength?: string;
    perspective?: boolean;
    perspectiveDistance?: string;
    rotateX?: string;
    rotateY?: string;
    style?: React.CSSProperties;
}
/**
 * OverlayMarker displays L-shaped corner markers.
 * If `perspective` is true, it applies a one-point perspective transform using
 * `perspectiveDistance`, `rotateX` and `rotateY` values.
 */
declare const OverlayMarker: React.FC<OverlayMarkerProps>;
export default OverlayMarker;
