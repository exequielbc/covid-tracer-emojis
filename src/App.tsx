import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from './theme';
import React from 'react';
import { AppContent } from './components/Layout';
import { QrCodeService } from './services';
import { ServicesContext } from './contexts';

const qrCodeService = new QrCodeService();

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ServicesContext.Provider value={{
          qrCodeService
        }}>
          <AppContent />
        </ServicesContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
