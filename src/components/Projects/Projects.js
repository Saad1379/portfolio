import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (

  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>
      WordPress Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, description, image, tags, source, visit }) =>
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <div>
            <TitleContent>Technologies</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Visit</ExternalLinks>
          </UtilityList><br />
        </BlogCard>

      )}
    </GridContainer>
  </Section>
);

export default Projects;