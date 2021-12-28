interface QrCodeRendererProps {
	imageUrl: string;
}

export const QrCodeRenderer = (props: QrCodeRendererProps) => {
	const { imageUrl } = props;
	return (
		<img src={imageUrl} alt='Generated QR Code' />
	)
}