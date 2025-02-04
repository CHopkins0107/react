import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HeroContentLeft } from './components/HeroContentLeft'
import { HeaderSimple } from './components/HeaderSimple'



// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <HeaderSimple></HeaderSimple>
    <HeroContentLeft></HeroContentLeft>
  </MantineProvider>;
}
