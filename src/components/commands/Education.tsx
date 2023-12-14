import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.HSc (Hons) in Biomedical Studies",
    desc: "University of Northern British Columbia | 2018 - 2023",
  },
  {
    title: "Master in Natural Resources and Environmental Studies",
    desc: "University of Northern British Columbia | 2023 - present",
  },
];

export default Education;
