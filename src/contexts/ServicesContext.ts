import { createContext } from "react";
import { IQrCodeService } from "../services";

interface IServicesContext {
	qrCodeService: IQrCodeService;
}

export const ServicesContext = createContext<IServicesContext>(null as any);