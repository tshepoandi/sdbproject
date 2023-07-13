import React from 'react'
import { MissionDiv,Image, Statement, PinkText, Heading } from './StyledComponents/styled'
const OurMission = () => {
  return (
    <center>
      <MissionDiv>
        <Image src={process.env.PUBLIC_URL + '/MissionPhoto.jpg'} alt="Logo" />
        
        <Statement>
          <Heading>OUR MISSION</Heading>
          To bring about a <PinkText>transformative</PinkText> 
          impact in the lives of South African inhabitants by providing high-quality 
          education and training. Through this, <PinkText>we aim to enhance their career and business prospects</PinkText>
           resulting in a significant improvement in their overall <PinkText>well-being.</PinkText>
        </Statement>
      </MissionDiv>
    </center>
  )
}

export default OurMission