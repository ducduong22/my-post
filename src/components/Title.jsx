import styled from 'styled-components'

const LogoStyled = styled.span`
  text-align: center;
  /* color: ${props => props.color}; */
  color: ${({ color }) => color};
`;


const LogoStyled1 = styled(LogoStyled)`
  color: blue;
`;


const Title = () => {
  return (
    <div
      id="header"
      className="d-flex justify-content-between border border-4 border-dark"
    >
      <div className="d-flex fs-4">
        <div className="frame_img"></div>
        <LogoStyled color="red">Logo</LogoStyled>
        <LogoStyled1>Logo</LogoStyled1>
      </div>
      <div className="col-third fs-4 position-relative header_Blogs border border-4 border-dark border-top-0 border-bottom-0">
        <div className="border border-4 border-dark border-top-0 border-start-0 position-absolute header_Blogs_row"></div>
        <div className="position-relative z-1">Blogs</div>
      </div>
      <div className="d-flex align-items-center">
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVLdSDmgrZN7TkzbHJb8dD0_7ASUQuERL2A&usqp=CAU"
        />
        <span>AdamLevine</span>
      </div>
    </div>
  );
};

export default Title;
