import styled from "styled-components"

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;

  [class*="img-wrap"] {
    grid-column: span 7;
  }

  .copy {
    grid-column: span 5;
  }

  .img {
    display: contents;

    .img-wrap {
      height: 550px;
      width: auto;
      background-color: #211c1c;
      border-radius: 5px;
      box-shadow: 0 15px 11px rgba(20, 23, 31, 0.05),
        0 9px 46px rgba(20, 23, 31, 0.06), 0 24px 38px rgba(20, 23, 31, 0.19);
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.2) 50%,
        transparent 50%,
        transparent
      );
    }
  }
`

export default StyledRow
