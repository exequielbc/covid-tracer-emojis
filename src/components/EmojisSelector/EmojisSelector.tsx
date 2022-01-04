import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { allowedEmojis } from '../../allowed-emojis';

interface EmojisSelectorProps {
  selectedEmojis: string[];
  onSelectedEmojisUpdate: (newEmojis: string[]) => void;
}

const pickRandomEmojis = (amount: number): string[] => 
  allowedEmojis
    .map((emoji) => ({ emoji, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ emoji }) => emoji)
    .slice(0, amount);

export const EmojisSelector = (props: EmojisSelectorProps) => {
  const { selectedEmojis, onSelectedEmojisUpdate } = props;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ToggleButtonGroup
        value={selectedEmojis}
        onChange={(event, value) => onSelectedEmojisUpdate(value)}
        aria-label="emojis selector"
				sx={{
					flexDirection: 'row',
					justifyContent: 'center',
					flexWrap: 'wrap'
				}}
        data-testid="emoji-buttons-group"
			>
        {allowedEmojis.map((emoji) => (
          <ToggleButton value={emoji} aria-label={emoji} key={emoji} data-testid="emoji-toggle-button">
            <Typography variant="body1">{emoji}</Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <ButtonGroup variant="contained" aria-label="bulk selection buttons">
        <Button onClick={() => onSelectedEmojisUpdate([])}>
          Clear selected emojis
        </Button>
        <Button onClick={() => onSelectedEmojisUpdate(pickRandomEmojis(5))}>
          Pick random 5
        </Button>
      </ButtonGroup>
    </Box>
  );
};
