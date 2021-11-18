import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Saad Riaz
      </SectionTitle>
      <SectionText>
        A flexible, responsible, and passionate developer having strong interest in full stack development.
      </SectionText>
      <Button onClick={() => window.open('https://www.upwork.com/freelancers/~0177d526ace3a204a9', '_blank')}>Hire me</Button>
    </LeftSection>
  </Section>
);

export default Hero;