import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmojisSelector } from './EmojisSelector';

test('renders emoji buttons group', async () => {
  render(<EmojisSelector
		selectedEmojis={[]}
		onSelectedEmojisUpdate={() => undefined}
	/>);
	const emojisButtonGroup = await screen.findAllByTestId('emoji-buttons-group');
  expect(emojisButtonGroup).toHaveLength(1);
});

test('renders emoji buttons', async () => {
  render(<EmojisSelector
		selectedEmojis={[]}
		onSelectedEmojisUpdate={() => undefined}
	/>);
	const emojisButtons = await screen.findAllByTestId('emoji-toggle-button');
  expect(emojisButtons.length).toBeGreaterThan(1);
});
