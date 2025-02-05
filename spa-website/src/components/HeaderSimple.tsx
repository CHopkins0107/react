import { Button, Container, Group } from '@mantine/core';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import classes from './HeaderSimple.module.css';

const links = [
  { link: 'https://github.com/CHopkins0107/', label: 'GitHub',  icon: <GitHubIcon />},
  { link: 'https://www.linkedin.com/in/jamelhopkins/', label: 'LinkedIn', icon: <LinkedInIcon /> },
];

export function HeaderSimple() {

  const items = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      href={link.link}
      target="_blank"
      variant="default"
      className={classes.link}
      leftSection={link.icon}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <TerminalIcon />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

      </Container>
    </header>
  );
}