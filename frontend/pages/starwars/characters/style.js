import styled from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead {
    background-color: grey;
    tr {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
    }
  }

  th,
  td {
    padding: 1.2rem 1.5rem;
  }
  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
    }
    tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    tr:last-of-type {
      border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export default TableWrapper;
