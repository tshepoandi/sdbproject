import React from 'react'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableHeadCell,TableRow, Container,Photo,ContentWrapper,Heading,Paragraph, ProgramTittle, NambDiv, ListDiv, List, ListItem } from './Styles/StyledMission';
const Programmes = () => {
  return (
    <NambDiv id='Programmes'>
      <Container>
        <Photo src={process.env.PUBLIC_URL + '/welder.jpg'} alt="Photo" />
        <ContentWrapper>
          <ProgramTittle>LEARNERSHIPS & APPRETICESHIPS AT SEDIBENG TRAINING CENTRE</ProgramTittle>
          <Heading>Unlock your potential and embark on a rewarding career with our comprehensive program offering.  Explore the exciting fields of Mechanical Fitter, Boilermaker, Plumber, Fitter and Turner, Welder, and Electrician. Gain the skills and knowledge needed to excel in these in-demand industries. Join us and open the doors to endless opportunities, as we provide you with top-notch training and hands-on experience, empowering you to achieve your professional goals.</Heading>
          <Paragraph>
            {/* <List>
              <ListItem> Mechanical</ListItem> 
              <ListItem> Fitter</ListItem>
              <ListItem> Boilermaker</ListItem>
              <ListItem> Plumber</ListItem>
              <ListItem> Fitter And Turner</ListItem>
              <ListItem> Electrician</ListItem>
            </List> */}
             <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <TableHeadCell>SETA/ETQA</TableHeadCell>
            <TableHeadCell>Qualification</TableHeadCell>
            <TableHeadCell>OFO CODE</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeadCell>NAMB & QCTO</TableHeadCell>
            <TableCell>Mechanical Fitter</TableCell>
            <TableCell>653303</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Fitter and Turner</TableCell>
            <TableCell>652302</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Boilermaker</TableCell>
            <TableCell>651302</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Welder</TableCell>
            <TableCell>651202</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Plumber</TableCell>
            <TableCell>642601</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Electrician</TableCell>
            <TableCell>671101</TableCell>
          </TableRow>
          {/* ... more rows */}
        </TableBody>
      </Table>
    </TableContainer>
          </Paragraph>
        </ContentWrapper>
        
      </Container>
      {/* 
      \
      
      
      
      
      */}

      <Container>
        
        <ContentWrapper>
          <ProgramTittle>Ignite your passion for engineering and seize the opportunity to shape a promising future with our diverse program offerings.</ProgramTittle>
          <Heading>We proudly present the coveted NC Engineering Fabrication, FETC Engineering Fabrication, NC Mechanical Engineering: Fitting, NC Welding Application and Practice, NC Machining and Tooling 3, and NC Automotive Repair & Maintenance programs.</Heading>
          <Paragraph>
            {/* <List>
              <ListItem> Mechanical</ListItem> 
              <ListItem> Fitter</ListItem>
              <ListItem> Boilermaker</ListItem>
              <ListItem> Plumber</ListItem>
              <ListItem> Fitter And Turner</ListItem>
              <ListItem> Electrician</ListItem>
            </List> */}
             <TableContainer>
                    <Table>
            <TableHead>
                <tr>
                    <TableHeadCell></TableHeadCell>
                    <TableHeadCell>Qualification</TableHeadCell>
                    <TableHeadCell>Level</TableHeadCell>
                </tr>
            </TableHead>
                <TableBody>
                    <TableRow>
                        <TableHeadCell>MERSETA</TableHeadCell>
                        <TableCell>NC Engineering Fabrication</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Engineering Fabrication</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Engineering Fabrication</TableCell>
                    <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Mechanical Engineering: Fitting</TableCell>
                    <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Mechanical Engineering: Fitting</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>FETC Mechanical Engineering: Fitting</TableCell>
                    <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>FETC Mechanical Engineering: Fitting</TableCell>
                    <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Welding Application and Practice</TableCell>
                    <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Welding Application and Practice</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>NC Machining and Tooling</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                        <TableCell></TableCell>
                        <TableCell>NC Automotive Repair & Maintenance</TableCell>
                        <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                        <TableCell></TableCell>
                        <TableCell>NC Automotive Repair & Maintenance</TableCell>
                        <TableCell>3</TableCell>
                </TableRow>
          {/* ... more rows */}
                </TableBody>
            </Table>
        </TableContainer>
        </Paragraph>
        </ContentWrapper>
        <Photo src={process.env.PUBLIC_URL + '/automotive.jpg'} alt="Photo" />
      </Container>
    </NambDiv>

  );
};

export default Programmes;