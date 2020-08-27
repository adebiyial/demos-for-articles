import styled from "styled-components"

const StyledCopy = styled.div.attrs(props => ({
  section: props.section,
}))`
  display: grid;
  align-content: center;
  justify-items: flex-start;
  gap: 5%;
  color: #211c1c;

  .tag {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.2px;
    color: ${props =>
      props.section === "proud-history"
        ? "#1c9724"
        : props.section === "global"
        ? "#635bff"
        : "red"};
  }

  .subtitle {
    font-size: 18px;
    line-height: 1.5;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    .check-mark {
      width: 20px;
      height: 20px;
      background-color: rgba(255, 0, 0, 0.5);
      border-radius: 50%;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transform: scaleX(-1) rotate(-46deg);
      line-height: 1;
    }

    .about-item {
      margin-left: 10px;
    }

    .item {
      display: flex;
      font-weight: 500;
    }
  }

  .cta {
    font-size: 15px;
    background-color: #211c1c;
    color: white;
    padding: 10px 30px;
    font-weight: 500;
    border-radius: 50px;
    color: white;
  }
`

export default StyledCopy
