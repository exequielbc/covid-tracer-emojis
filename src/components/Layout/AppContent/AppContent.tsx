import { Button, Typography } from '@mui/material';
import { QrCodeRenderer } from '../../QrCodeRenderer';
import { useState } from 'react';
import { Box } from '@mui/material';
import { IQrCodeService } from '../../../services';
import { EmojisSelector } from '../../EmojisSelector';

interface AppContentProps {
	services: {
		qrCodeService: IQrCodeService;
	}
}

export const AppContent = (props: AppContentProps) => {
	const { qrCodeService } = props.services;
	const [ selectedEmojis, setSelectedEmojis ] = useState<string[]>([]);
	const [ qrCodeUrl, setQrCodeUrl ] = useState('');
	const setCode = async (emojisToEncode: string[]) => {
		const qrCodeUrl = await qrCodeService.generateQrCodeForContactTracerApp(emojisToEncode);
		setQrCodeUrl(qrCodeUrl);
	}

	return (
		<Box display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center'>
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