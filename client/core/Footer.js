import React from "react"
import { Twitter, Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import {
    Box,
    Container,
    Row,
    Column,
    About,
    Heading,
    Title,
    FooterLink,
    SocialList,
    SocialItem,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Title>BUDGEThub</Title>
            <Container>
                <About>
                    Let’s get to the point. Personal finance is hard. So hard that most of us choose to ignore it. But it doesn’t have to be that way. It’s time to turn avoidance into action, confusion into clarity. Time to give people the knowledge, tools and power to choose better personal finance.
                    We help you find better financial products for your specific needs. Whether you need to open a new saving account, a chequing account, or applying for a credit card, we get you the information you need to choose better.
                    Neeed more financial knowledge:

                    <br />
                    <br />
                    <a href='https://he202jhct0y.typeform.com/to/qdbHCRjg'>Subscribe to our Newsletter </a>
                </About>

                <SocialList>
                    <SocialItem>
                        <FooterLink href='https://twitter.com'>
                            <Twitter />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.facebook.com'>
                            <Facebook />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.instagram.com'>
                            <Instagram />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.linkedin.com/'>
                            <LinkedIn />
                        </FooterLink>
                    </SocialItem>
                </SocialList>
            </Container>
        </Box>
    );
};

export default Footer
