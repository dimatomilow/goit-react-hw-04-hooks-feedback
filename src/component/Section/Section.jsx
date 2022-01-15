import { SectionStyle,Title } from "./SectionStyled";

const Section = ({title,children}) => {
    return (
<SectionStyle>
    <Title>{title}</Title>
    {children}
  </SectionStyle>
    );
}

export default Section;