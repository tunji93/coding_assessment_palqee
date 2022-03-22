import Pagination from "components/Pagination";
import { useMemo, useState } from "react";
import { sortCharacters } from "utils/helpers";
import { IoFilterOutline } from "react-icons/io5";
import styled from "styled-components";
import TableWrapper from "./tableStyles";
import Link from "next/link";
import { useRouter } from "next/router";

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const DataTable = (props) => {
  const router = useRouter();
  const path = router.asPath;

  const [data, setData] = useState([...props.data]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("default");

  //Page change function
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  //Pagesize change function
  const pageSizeHandler = (e) => {
    const { value } = e.target;

    setPageSize(+value);
  };

  //sort function handler
  const onSortChangeHandler = (e) => {
    const { value } = e.target;
    setSort(value);

    if (value === "default") {
      setData(props.data);
    } else if (value === "homeworld") {
      setData(sortCharacters([...data], value));
    } else {
      setData(sortCharacters([...data], value));
    }
  };

  //filter function handler
  const filter = (val) => {
    setData(sortCharacters([...data], val));
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <form>
          <label
            htmlFor="sort"
            style={{ fontSize: "14px", marginRight: "5px" }}
          >
            Sorter
          </label>
          <select id="sort" value={sort} onChange={onSortChangeHandler}>
            <option value="default">default</option>
            <option value="name">name</option>
            <option value="hairColor">hair color</option>
            <option value="skinColor">skin color</option>
            <option value="eyeColor">eye color</option>
            <option value="gender">gender</option>
            <option value="homeworld">home world</option>
          </select>
        </form>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              <Col>
                <span>Hair Color</span>
                <IoFilterOutline
                  size={16}
                  onClick={() => filter("hairColor")}
                />
              </Col>
            </th>
            <th>Skin Color</th>
            <th>
              <Col>
                <span>Eye Color</span>
                <IoFilterOutline size={16} onClick={() => filter("eyeColor")} />
              </Col>
            </th>
            <th>gender</th>
            <th>
              <Col>
                <span>Home World</span>
                <IoFilterOutline
                  size={16}
                  onClick={() => filter("homeworld")}
                />
              </Col>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <tr key={row.id}>
              <td>
                <Link href={`${path}/${row.id}`}>{row.name}</Link>
              </td>
              <td>{row.hairColor}</td>
              <td>{row.skinColor}</td>
              <td>{row.eyeColor}</td>
              <td>{row.gender}</td>
              <td>{row.homeworld.name}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxHeight: "70px",
          height: "50px",
        }}
      >
        <form>
          <label
            htmlFor="pagesize"
            style={{ fontSize: "14px", marginRight: "5px" }}
          >
            Select Page Size
          </label>
          <select id="pagesize" value={pageSize} onChange={pageSizeHandler}>
            <option value={5}>5</option>
            <option value={10}> 10</option>
            <option value={15}>15</option>
          </select>
        </form>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default DataTable;
