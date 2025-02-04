import { CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DNavbar from './components/DNavbar';
import Home from './pages/Home';
import Movie from './pages/Movie/Movie';
import NotFoundPage from './pages/NotFound';
import Serie from './pages/Serie/Serie';
import Settings from './pages/Settings';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

// eslint-disable-next-line
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
    const [mode, setMode] = useState<PaletteMode>('dark');

    useEffect(() => {
        document.title = 'DesterLib';
        let localTheme = localStorage.getItem('theme') || 'dark';
        localTheme = localTheme === 'light' ? 'light' : 'dark';
        setMode(localTheme as PaletteMode);
    }, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                let localTheme = localStorage.getItem('theme') || 'dark';
                localTheme = localTheme === 'light' ? 'dark' : 'light';
                localStorage.setItem('theme', localTheme);
                setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light' ? lightTheme.palette : darkTheme.palette),
                },
                typography: {
                    fontFamily: `${
                        mode === 'light'
                            ? lightTheme.typography.fontFamily
                            : darkTheme.typography.fontFamily
                    }`,
                    button: {
                        textTransform: 'none',
                    },
                },
                shape: {
                    borderRadius:
                        mode === 'light'
                            ? lightTheme.shape.borderRadius
                            : darkTheme.shape.borderRadius,
                },
                components: {
                    MuiMenu: {
                        styleOverrides: {
                            root: {
                                padding: '20px',
                            },
                            paper: {
                                margin: '0px',
                                padding: '8px',
                                background: `${
                                    mode === 'light'
                                        ? lightTheme.palette.background.paper
                                        : darkTheme.palette.background.paper
                                } !important`,
                            },
                            list: {
                                padding: 0,
                            },
                        },
                    },
                    MuiMenuItem: {
                        styleOverrides: {
                            root: {
                                borderRadius:
                                mode === 'light'
                                    ? lightTheme.shape.borderRadius
                                    : darkTheme.shape.borderRadius,
                                transition: '0.2s ease',
                            },
                        },
                    },
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <DNavbar colorModeContext={ColorModeContext} themeMode={mode} />
                    <Routes>
                        <Route path='*' element={<NotFoundPage />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/movie/:id' element={<Movie />} />
                        <Route path='/serie/:id' element={<Serie />} />
                        <Route path='/settings/*' element={<Settings />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
