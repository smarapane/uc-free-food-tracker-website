import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table className="Table"{...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ViewPost() {
  const [loadingData, setLoadingData] = useState(true);

  const columns = React.useMemo(
  () => [
    {
      Header: ' ',
      columns: [
        {
          Header: 'Event Name',
          accessor: 'foodName',
        },
        {
          Header: 'Event Description',
          accessor: 'description',
        },
        {
          Header: 'Latitude',
          accessor: 'latitude',
        },
        {
          Header: 'Longitude',
          accessor: 'longitude',
        },

      ],
    },
  ],
  []
)
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      fetch("YOURURL/api/locations", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response => response.json()))
      .then((data => setData(data.data)))
      .then((setLoadingData(false)));
    }

    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <div>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <div>
          <p>{console.log(data)}</p>
          <Table columns={columns} data={data}/>
        </div>
      )}
    </div>
  )
}

export default ViewPost
