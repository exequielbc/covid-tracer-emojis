import { useContext } from "react";
import { ServicesContext } from ".";

const useServicesContext = () => useContext(ServicesContext);
export const useQrCodeService = () => useServicesContext().qrCodeService;