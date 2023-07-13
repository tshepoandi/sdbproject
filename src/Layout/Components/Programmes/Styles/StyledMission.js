import styled from 'styled-components';

// Styled Components

export const ProgramTittle = styled.h1`
  color:#0F52BA;
`


export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px){
  flex-direction: column;
  }
`;

export const Photo = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
  margin-top:30px;
  border-radius:10px;
  @media (max-width: 768px){
  width:100%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Heading = styled.h1`
  font-size: 15px;
  margin-bottom: 10px;
  @media (max-width: 768px){
    font-size:10px;
    margin-bottom:30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 10px;
`;

export const ListDiv = styled.div`
  display:flex;
  flex-direction:row;
`

export const NambDiv = styled.div`

` 

export const List = styled.ul`
  list-style-type:none;
  margin-right:10%;
  `

export const ListItem = styled.li`
  width:100%;
  font-size:30px;
  padding:10px;
`


// Styled Components
export const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #0F52BA;
  color: white;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;
