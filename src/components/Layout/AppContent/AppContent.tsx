import { Typography } from '@mui/material';
import { QrCodeRenderer } from '../../QrCodeRenderer';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import QrCode from 'qrcode';

const generateQrCodeUrl = async (text: string): Promise<string> => {
  const dataUrl = await QrCode.toDataURL(text);
  return dataUrl;
}

export const AppContent = () => {
	const [qrCodeUrl, setQrCodeUrl] = useState('');
  useEffect(() => {
    const setInitialCode = async () => {
      const qrCodeUrl = await generateQrCodeUrl('Hey!');
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