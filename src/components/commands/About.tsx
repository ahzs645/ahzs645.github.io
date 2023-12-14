import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ahmad Jalil</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a researcher</HighlightAlt> based in Prince George,
        Canada.
      </p>
      <p>
        I am passionate about learning new things and <br />
        figuring out how to solve real-life challenges with data.
      </p>
    </AboutWrapper>
  );
};

export default About;
