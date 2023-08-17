import { Button } from 'antd';
import { styled } from "styled-components";
export const LandingPage=styled.div`
width:100dw;
height: 100dh;
color: white;
background-color: rgb(28,34,48);
`

export const Section1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
background-image: url('./assert/bg-curvy-desktop.svg');
background-size: auto;
background-repeat: no-repeat;
background-position: center bottom;
`

export const Header=styled.div`
width:100vw;
height:20vh;
display: flex;
align-items: center;
justify-content: space-between;
background-color: rgb(28,34,48);
@media (max-width:400px) {
    justify-content : center ;
}
`

export const LeftDiv=styled.div`
/* height:100%; */
width: 180px;
margin-left: 80px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
@media (max-width:400px) {
    margin-left: 0px;   
}
`

export const RightDiv=styled.div`
height:100%;
width: auto;
align-items: center;
display: flex;
margin-right: 80px;
color: white;
text-decoration: none;
@media (max-width:400px) {
    margin-right: 0px;
}
`

export const Links=styled.a`
color: white;
text-decoration: none;
margin-left: 60px;
@media (max-width:400px) {
    margin-left: 5px;
}
&:hover {
    text-decoration: underline;
  }
`

export const ImageDiv=styled.div`
@media (max-width:400px) {
    width: 100%;
height: 100%;
}
`
export const Maindiv=styled.div`
align-items: center;
display: flex;
    justify-content: center;
    flex-direction: column;
@media (max-width:400px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
`
export const Heading1=styled.p`
font-size: 42px;
color: white;
font-weight: 600;
line-height: 0;
letter-spacing: 0.5px;
@media (max-width:400px) {
    line-height: 1;
    text-align: center;
    font-size: 30px;
}
`

export const Ptag1=styled.p`
font-size: 20px;
line-height: 0;
letter-spacing: 0.5px;
@media (max-width:400px) {
    line-height: 1;
    text-align: center;
    font-size: 15px;
}
`

export const GetStartButton=styled(Button)`
background-color: rgb(77,195,211);
width: 280px;
height: 55px;
margin-top: 20px;
margin-bottom: 200px;
border: none;
font-size: 18px;
font-weight: 600;
color: white;
border-radius: 50px;
&:hover {
    cursor: pointer;
  }
`

export const Section2 = styled.div`
width: 100%;
background-color: rgb(25,30,42);
`

export const Div1=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap:10px;
justify-content: center;
margin-bottom: 50px;
`

export const Left1=styled.div`
width: 400px;
align-items: center;
line-height: 0;
display: flex;
flex-direction: column;
@media (max-width:400px) {
    text-align: center;
    width: 90%;
}
`
export const Heading2=styled.p`
font-size:20px;
font-weight:600;
@media (max-width:400px) {
    line-height: 1;
    text-align: center;
}
`

export const Para2=styled.p`
font-size: 15px;
/* line-height: 0.5; */
font-weight:400;
@media (max-width:400px) {
    line-height: 1;
    text-align: center;
}
`

export const Right1=styled.div`
width: 400px;
align-items: center;
display: flex;
flex-direction: column;
line-height: 0;
@media (max-width:400px) {
    text-align: center;
    width: 90%;
}
`
export const Div2=styled.div`
width: 100%;
display: flex;
gap:10px;
flex-wrap: wrap;
justify-content: center;
`

export const Section3=styled.div`
width: 100%;
background-color: rgb(25,30,42);
display: flex;
flex-wrap: wrap;
gap:40px;
align-items: center;
justify-content: space-around;
`

export const Section3Div1=styled.div`
width: auto;
`

export const Section3Div2=styled.div`
width: 40%;
text-align: left;
@media (max-width: 400px) {
    width: 90%;
}
`

export const ParaSection3 = styled.p`
font-size: 40px;
font-weight: 600;
line-height: 0.3;
`
export const Section3Description = styled.p`
font-size: 17px;
line-height: 0.5;
font-weight:400;
@media (max-width: 400px) {
    line-height: 1.1;
}
`
export const Linkss=styled.a`
color: #66dcd9 ;
margin-left: 60px;
`
export const Section4=styled.div`
display: flex;
width: 100%;
/* margin-top: 60px; */
padding-top: 60px;
padding-bottom: 50px;
background-color: rgb(25,30,42);
padding-bottom: 300px;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
export const QuotesDiv=styled.div`
width:350px;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: left;

padding-left: 40px;
justify-content: center;
text-align: left;
height: 200px;
background-color: rgb(32,41,60);
border-radius: 4px;
`
export const Para3=styled.p`
font-size: 15px;
line-height: 0;
text-align: left;
font-weight:400;
`
export const UserLogo=styled.img`
border-radius:50px;
height: 25px;
margin-right: 10px;
width: 25px;
`
export const ProfileDiv=styled.div`
display: flex;
align-items: center;
`
export const ProfileName=styled.p`
font: 20px;
font-weight: 400;
line-height: 0.1;
`

export const ProfilePosition=styled.p`
font-size: 10px;
line-height: 0.1;
`

export const Section5=styled.div`
width: 100%;
background-color: rgb(12,21,36);
`

export const AccessDiv = styled.div`
width: 60%;
height: 300px;
align-items: center;
justify-content: center;
display:flex;
flex-direction:column;
background-color:rgb(28,34,48);
margin-top: -150px;
@media (max-width:400px)
{
    width: 90%;
    height: 350px;
}
`

// export const ArrowLogo=styled.div`
// margin-top: 3px;
// `
export const InputDiv=styled.div`
display: flex;
align-items: center;
justify-content: center;

`

export const InputHeading=styled.p`
font-size:25px;
`

export const InputPara=styled.p`
font-size:15px;
line-height: 0;
@media (max-width: 400px)
{
    line-height: 1;
    text-align: center;
}
`

export const InputBoxDiv=styled.div`
width:90%;
margin-top: 20px;
display: flex;
align-items: center;
margin-bottom:30px;
@media (max-width: 400px)
{
    flex-direction: column;
}
`
export const InputField= styled.input`
width:400px;
border: none;
border-radius: 50px;
height:40px;
margin: 10px;
@media (max-width: 400px)
{
    width: 250px;
}
`
export const InputButton=styled(Button)`
border-radius: 30px;
border: none;
background-color: rgb(80,196,213);
width:200px;
color: white;
height:40px;
margin: 10px;
&:hover {
    cursor: pointer;
  }
`

export const Footer=styled.div`
width:100%;
background-color: rgb(12,21,36);
@media (max-width:400px) {
 width:90%;
}
`
export const FooterLogo=styled.div`
margin-left: 70px;
margin-top: 70px;
`
export const FooterContents = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin: 70px;
@media (max-width: 400px) {
    margin: 0px;
    margin-left: 25px;
    margin-top: 70px;
    flex-direction: column;
}
`
export const InnerFooter=styled.div`
display: flex;
flex-direction: column;
`
export const FooterLocationLogo=styled.div`
margin-top: 10px;
`

export const FooterLocation=styled.div`
display: flex;
justify-content: center;
width: 400px;
@media (max-width: 400px) {
    width: 80%;
    margin-left: 20px;
}
`

export const FooterPara=styled.div`
    font-size: 16px;
    line-height: 2;
    text-align: left;
    margin-left: 20px;
    &:hover {
    cursor: pointer;
  }   
`

export const FooterContact=styled.div`
width: 300px;
display: flex;
margin-left: 30px;
@media (max-width: 400px) {
   margin-top: 30px;
}
`
export const FooterAboutUs=styled.div`
width:200px;
display: flex;
margin-left: 6px;
flex-direction: column;
@media (max-width: 400px) {
   margin-top: 30px;
}
`
export const FooterSocialMedia=styled.div`
display: flex;
width: 150px;
justify-content: center;
@media (max-width: 400px) {
   margin-top: 30px;
}
`

export const UsersDiv=styled.div`
width: 100vw;
height: 100vh;
background-color: azure;
`

export const SlidingDiv=styled.div`
 position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 100%;
  background-color: white;
  padding: 20px;
`
export const SocialShareHeading=styled.div`
width: 100%;
height: 40px;
align-items: center;
background-color: rgb(239,242,244);
`
export const SocialShareFacebook=styled.div`
width: 100%;
height: 70%;
display: flex;
flex-direction: column;

`
export const AutopostDiv=styled.div`
width: 100%;
height: 40px;
align-items: center;
display: flex;
justify-content: space-between;
background-color: rgb(251,252,252);
/* background-color: blue; */
`
export const MaxScoreDiv=styled.div`
width: 100%;
height: 110px;
display: flex;
flex-direction: column;
`
export const PostPerdayDiv=styled.div`
width: 100%;
height: 40px;
align-items: center;
display: flex;
`
export const PostGap=styled.div`
width: 100%;
height: 60px;
display: flex;
`

export const ScoreRulerDiv=styled.div`
display: flex;
align-items: center;
`
export const MinScoreText=styled.p`
padding-right: 20px;
`