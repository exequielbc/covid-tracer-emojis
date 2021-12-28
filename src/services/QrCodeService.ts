import QrCode from 'qrcode';

export interface IQrCodeService {
	generateQrCodeUrl(text: string): Promise<string>;
}

export class QrCodeService implements IQrCodeService {
	public async generateQrCodeUrl(text: string): Promise<string> {
		const dataUrl = await QrCode.toDataURL(text);
		return dataUrl;
	}
}

