import { Button, ButtonProps, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroText.module.css';
import EmailIcon from '@mui/icons-material/Email';

export function EmailButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
    return (
        <Button 
            component="a"
            leftSection={<EmailIcon />} 
            variant="filled" 
            {...props} 
        />
    );
}

export function HeroText() {
  return (
    <div className={classes.hero}>
        {/* <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 20%)"
            opacity={1}
            zIndex={0}
        /> */}
        <Container className={classes.wrapper} size={1400}>

        <div className={classes.inner}>
            <Title className={classes.title}>
            Jamel Hopkins
            </Title>

            <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
                Full Stack developer with a passion for AI, Game Development, and Education
            </Text>
            </Container>

            <div className={classes.controls}>
                <Button className={classes.control} size="md" variant="default" color="gray">
                    Book a demo
                </Button>
                <EmailButton className={classes.control} href="mailto:chopkins0107@gmail.com" size="md">
                    Contact Me
                </EmailButton>
            </div>
        </div>
        </Container>
    </div>
  );
}