import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MainSectionStyle";

const MainSection = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Hermela.
        <br />
        <br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a QA Engineer and Software Developer | Open to New Opportunities!
      </SectionText>
      <Button><a download href="/Hermela Resume.pdf">Download Resume</a></Button>
    </LeftSection>
  </Section>
);

export default MainSection;
