import styled from "@emotion/styled"

export const FeatureSection = styled.section`
  padding: 100px 0;
  background-color: #f2f2f2;
`

export const FeatureInner = styled.div`
  padding: 0;
  display: grid;
  row-gap: 150px;
`

export const FeatureHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;

  > div:first-of-type {
    grid-column: span 7;
  }

  .title {
    font-size: 38px;
  }

  .subtitle {
    margin-top: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`
