import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import titleHeaderImg from "../../static/titleHeader.jpg"

const TitleHeader = ({children}) => {

  
  return (
    <TitleHeaderBox >
      <HomeTitle>{children}</HomeTitle>
      {/* <DetailTitle>detail</DetailTitle>
      <WriteTitle navigate={'/wirte'}>write</WriteTitle> */}
    </TitleHeaderBox>
  );
};

const TitleHeaderBox = styled.div`
  height: 200px;
  display: flex;
  background-image : linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(178, 244, 254, 0.5)), url(${titleHeaderImg});
  background-position : center;
  background-size : cover;
  background-color: #eee;
  font-weight: bold;
`
const HomeTitle = styled.div`
  margin: auto;
  font-size: 30px;
  color: #fff;
`
// const WriteTitle = styled.div`
//   display: ${ props => props.navigate('/wirte')? 'block' : 'none'};
//   margin: auto;
//   font-size: 30px;
//   color: #fff;
// `
// const DetailTitle = styled.div.attrs(props => ({navigate:'/wirte',}))`
//   margin: auto;
//   font-size: 30px;
//   color: #fff;
// `



export default TitleHeader;
