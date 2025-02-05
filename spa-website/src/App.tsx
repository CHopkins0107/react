import { useState } from 'react'
import { Container, SimpleGrid } from '@mantine/core'
import './App.css'

import { HeroText } from './components/HeroText'
import { HeaderSimple } from './components/HeaderSimple'
import { BadgeCard } from './components/BadgeCard'



// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <HeaderSimple />
    <HeroText/>
    <Container>
      <SimpleGrid cols={3}>
        <BadgeCard></BadgeCard>
        <BadgeCard></BadgeCard>
        <BadgeCard></BadgeCard>
        <BadgeCard></BadgeCard>
      </SimpleGrid>
    </Container>
  </MantineProvider>;
}
