import { Button, Typography } from '@mui/material';
import { QrCodeRenderer } from '../../QrCodeRenderer';
import { useState } from 'react';
import { Box } from '@mui/material';
import { EmojisSelector } from '../../EmojisSelector';
import { useQrCodeService } from '../../../contexts';

export const AppContent = () => {
	const qrCodeService = useQrCodeService();
	const [ selectedEmojis, setSelectedEmojis ] = useState<string[]>([]);
	const [ qrCodeUrl, setQrCodeUrl ] = useState('');


	const setCode = async (emojisToEncode: string[]) => {
		const qrCodeUrl = await qrCodeService.generateQrCodeForContactTracerApp(emojisToEncode);
		setQrCodeUrl(qrCodeUrl);
	}

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			py: '16px'
		}}>
			<Typography variant='h1'>NZ Covid Tracer Emojis</Typography>
			<EmojisSelector
				selectedEmojis={selectedEmojis}
				onSelectedEmojisUpdate={(newEmojis: string[]) => setSelectedEmojis(newEmojis)}
			/>
			<Button
				variant='contained'
				onClick={() => setCode(selectedEmojis)}
			>
				Generate QR code
			</Button>
			{ qrCodeUrl && <QrCodeRenderer imageUrl={qrCodeUrl} /> }
		</Box>
	);
};