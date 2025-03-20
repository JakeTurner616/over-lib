// src/stories/OverlayMarker.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import OverlayMarker, { OverlayMarkerProps } from '../components/OverlayMarker';

export default {
  title: 'Components/OverlayMarker',
  component: OverlayMarker,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    markerColor: { control: 'color' },
    markerThickness: { control: 'number' },
    markerLength: { control: 'text' },
    perspective: { control: 'boolean' },
    perspectiveDistance: { control: 'text' },
    rotateX: { control: 'text' },
    rotateY: { control: 'text' }, // New control for horizontal rotation
  },
} as Meta<OverlayMarkerProps>;

const Template: StoryFn<OverlayMarkerProps> = (args: OverlayMarkerProps) => (
  <div style={{ position: 'relative', width: '400px', height: '300px', background: '#eee' }}>
    <OverlayMarker {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  height: '200px',
  markerColor: 'red',
  markerThickness: 2,
  markerLength: '20px',
  perspective: false,
};

export const Perspective = Template.bind({});
Perspective.args = {
  width: '200px',
  height: '200px',
  markerColor: 'red',
  markerThickness: 2,
  markerLength: '20px',
  perspective: true,
  perspectiveDistance: '800px',
  rotateX: '10deg',
  rotateY: '0deg',
};
