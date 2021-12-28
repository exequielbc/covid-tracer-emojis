import { Box, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { allowedEmojis } from '../../allowed-emojis';

interface EmojisSelectorProps {
  selectedEmojis: string[];
  onSelectedEmojisUpdate: (newEmojis: string[]) => void;
}

export const EmojisSelector = (props: EmojisSelectorProps) => {
  const { selectedEmojis, onSelectedEmojisUpdate } = props;
  return (
    <Box flexDirection="row" justifyContent="center">
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
    </Box>
  );
};
