import styled from 'styled-components'; /*Дополнительно установленно npm install styled-components*/

const Pattern = () => {
    return (
        <StyledWrapper>
            <div className="pattern-background" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .pattern-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background:
      radial-gradient(circle, #ff6f61 20%, transparent 20%) 0 0,
      radial-gradient(circle, #ffcc00 20%, transparent 20%) 40px 40px;
    background-size: 80px 80px;
    background-repeat: repeat;
    pointer-events: none; 
  }
`;

export default Pattern;