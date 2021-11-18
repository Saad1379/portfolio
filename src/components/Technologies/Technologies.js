import React from 'react';
import { DiFirebase, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      This is the list of technologies I have been working with.
    </SectionText>
    <List>
      <ListContainer>
        <DiReact size="3rem" />
        <ListTitle>
          Front-end
        </ListTitle>
        <ListParagraph>
          Hands on experience with React.js
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <DiFirebase size="3rem" />
        <ListTitle>
          Back-end
        </ListTitle>
        <ListParagraph>
          Hands on experience with Node.js, Express.js and MongoDB
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <DiWordpress size="3rem" />
        <ListTitle>
          WordPress
        </ListTitle>
        <ListParagraph>
          Built dozens of websites using WordPress
        </ListParagraph>
      </ListContainer>
    </List>
  </Section>
);

export default Technologies;
