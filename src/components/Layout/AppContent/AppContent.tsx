import { Typography } from '@mui/material';
import { QrCodeRenderer } from '../../QrCodeRenderer';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { IQrCodeService } from '../../../services';

interface AppContentProps {
	services: {
		qrCodeService: IQrCodeService;
	}
}

export const AppContent = (props: AppContentProps) => {
	const { qrCodeService } = props.services;
	const [qrCodeUrl, setQrCodeUrl] = useState('');
  useEffect(() => {
    const setInitialCode = async () => {
			const emojisToEncode = ['🎅'];
      const qrCodeUrl = await qrCodeService.generateQrCodeForContactTracerApp(emojisToEncode);
      setQrCodeUrl(qrCodeUrl);
    }
    setInitialCode();
  }, []);

	return (
		<Box>
			<Typography variant='h1'>NZ Covid Tracer Emojis</Typography>
			{ qrCodeUrl && <QrCodeRenderer imageUrl={qrCodeUrl} /> }
		</Box>
	);
};