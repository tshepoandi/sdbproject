import React from 'react'
import { ImageContainer,Image,MecaBody ,Paragraph,Table,TableBody,TableCell,TableContainer,TableHead,TableHeadCell,TableRow} from './StyledComponents/styled'
function MecaTable() {
  return (
    <MecaBody>
        <ImageContainer>
            <Image src={process.env.PUBLIC_URL + '/automotive.jpg'} alt="Image" />
        </ImageContainer>
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
    </MecaBody>
  )
}

export default MecaTable