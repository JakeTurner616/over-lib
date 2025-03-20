// src/stories/OverlayMarker.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import OverlayMarker, { OverlayMarkerProps } from '../components/OverlayMarker';

export default {
  title: 'Components/OverlayMarker',
  component: OverlayMarker,
  argTypes: {
    width: { control: 'text', defaultValue: '200px' },
    height: { control: 'text', defaultValue: '200px' },
    markerColor: { control: 'color', defaultValue: 'red' },
    markerThickness: { control: 'number', defaultValue: 2 },
    markerLength: { control: 'text', defaultValue: '20px' },
    perspective: { control: 'boolean', defaultValue: false },
    perspectiveDistance: { control: 'text', defaultValue: '800px' },
    rotateX: { control: 'text', defaultValue: '10deg' },
    rotateY: { control: 'text', defaultValue: '0deg' },
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
  perspectiveDistance: '800px',
  rotateX: '10deg',
  rotateY: '0deg',
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