import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const MyAccomplishments = () => (
  <Section>
    <SectionTitle>My Accomplishments</SectionTitle>

    <SectionText>
      -Completed Bachelor Degree in Software Engineering with 'VERY GREAT
      DISTINICTION' of CGPA 3.82.
      <br />
      -Completed Bachelor Degree in Management.
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://www.coursera.org/account/accomplishments/certificate/63RLBK2ZSVW5"
      >
        Coursera Certificate in Programming With JavaScript
      </a>{" "}
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://www.coursera.org/account/accomplishments/certificate/E7QCUZE5DBLF"
      >
        Coursera Certificate in React Basics
      </a>{" "}
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://www.linkedin.com/posts/hermela-getnet-407ab9211_activity-6913454422119391232-4Zcb?utm_source=share&utm_medium=member_android"
      >
        Microsoft Certified Azure Data Scientist Associate
      </a>{" "}
      <br />
    </SectionText>
  </Section>
);

export default MyAccomplishments;
