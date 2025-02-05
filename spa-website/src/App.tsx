import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HeroText } from './components/HeroText'
import { HeaderSimple } from './components/HeaderSimple'



// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <HeaderSimple />
    <HeroText/>
  </MantineProvider>;
}
