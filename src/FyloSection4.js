import { 
    Section4,
    Para3,
    QuotesDiv,
    ProfileDiv,
    UserLogo,
    ProfileName,
    ProfilePosition,
    
} from './Component';

const FyloSection4 = () => {
    return ( 
        <Section4>
            
        <QuotesDiv>
            <Para3>Fylo has improved our team productivity by</Para3>
            <Para3>an order of magnitude. Since making the</Para3>
            <Para3>switch our team has become a well-oiled</Para3>
            <Para3>collaboration machine.</Para3><br/>
            <ProfileDiv>
            <UserLogo src="./assert/profile-1.jpg"></UserLogo>
            <div>
                <ProfileName>Satish Patel</ProfileName>
                <ProfilePosition>Founder & CEO, Huddle</ProfilePosition>
            </div>
            </ProfileDiv>
        </QuotesDiv>
        <QuotesDiv>
              <Para3>Fylo has improved our team productivity by</Para3>
            <Para3>an order of magnitude. Since making the</Para3>
            <Para3>switch our team has become a well-oiled</Para3>
            <Para3>collaboration machine.</Para3><br/>
            <ProfileDiv>
            <UserLogo src="./assert/profile-2.jpg"></UserLogo>
            <div>
                <ProfileName>Bruce McKenzie</ProfileName>
                <ProfilePosition>Founder & CEO, Huddle</ProfilePosition>
            </div>
            </ProfileDiv>
        </QuotesDiv>
        <QuotesDiv>
                 <Para3>Fylo has improved our team productivity by</Para3>
            <Para3>an order of magnitude. Since making the</Para3>
            <Para3>switch our team has become a well-oiled</Para3>
            <Para3>collaboration machine.</Para3><br/>
            <ProfileDiv>
            <UserLogo src="./assert/profile-3.jpg"></UserLogo>
            <div>
                <ProfileName>Iva Boyd</ProfileName>
                <ProfilePosition>Founder & CEO, Huddle</ProfilePosition>
            </div>
            </ProfileDiv>
        </QuotesDiv>
    </Section4>
     );
}
 
export default FyloSection4;