import QrCode from 'qrcode';

export interface IQrCodeService {
	generateQrCodeForContactTracerApp(emojis: ApprovedEmoji[]): Promise<string>
}

// TODO: need to create a list of the approved emojis by looking at the GitHub repo
type ApprovedEmoji = string;

interface CovidTracerEasterEggDecodeData {
	data: ApprovedEmoji[];
}

export class QrCodeService implements IQrCodeService {
	private async generateQrCodeUrl(text: string): Promise<string> {
		const dataUrl = await QrCode.toDataURL(text);
		return dataUrl;
	}

	public async generateQrCodeForContactTracerApp(emojis: ApprovedEmoji[]): Promise<string> {
		const escapedEmojis = emojis.map(emoji => unescape(encodeURIComponent(emoji)))
		const dataToEncode: CovidTracerEasterEggDecodeData = {
			data: escapedEmojis
		};
		const base64EncodedData = btoa(JSON.stringify(dataToEncode));
		const template = `RECARTDIVOCZNasdf.${base64EncodedData}.asdf`;
		return await this.generateQrCodeUrl(template);
	}
}

