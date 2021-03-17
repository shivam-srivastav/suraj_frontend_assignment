import { useState } from 'react';
import './App.scss';
import arrow  from './Assets/arrow.svg'
function App() {

  /* States for Apps **/
  const [row,setRow] = useState(1);
  const [rowj,setRowj] = useState(0);
  const [column, setColumn] = useState(1);
  const [columnj, setColumnj] = useState(0);


  /* creating array for rows and column**/
  let rowObject = [];
  let columnObject = [];
  for (let i = 0; i < row; i++){
    rowObject.push(i);
  }
  for (let i = 0; i < column; i++){
    columnObject.push(i);
  }

  /** Direction key button for traversing in table */
  const up = () => rowj >= 1 && setRowj(rowj - 1);
  const down=() => rowj<row-1 && setRowj(rowj + 1);
  const left=() => columnj > 0 && setColumnj(columnj - 1);
  const right=() => columnj < column-1 && setColumnj(columnj + 1);

  return (
    <div className="App">
      <div style={{textAlign:"center",margin:"2rem"}}>
        <h1>React Assesment</h1>
        {row < 0 || column < 0 ?<span style={{color:"red"}}>Not a valid Row/Column</span> : <span>Name : Shivam Srivastava </span>}
      </div>
      <div className="wrapper">
      <div className="row-column">
        <li>
          Rows:
           {console.log(row,column)}
        <input type="number" value={row} onChange={(e) => {
            setRow(e.target.value)
        }} placeholder="Enter Rows" />
        </li>
        <li>
          Coloums:
          <input type="number" value={column} onChange={(e) => {
            setColumn(e.target.value)
          }} placeholder="Enter Coloums" />
        </li>
      </div>
      <div className="direction_key">
          <div onClick={up} >
            <img
              src={arrow}
              alt="arrow"
              style={{ cursor:"pointer",transform: 'rotate(270deg)', border: '1px solid black', borderRadius: "50%" }} />
        </div>
        <div>
            <img
              src={arrow}
              alt="arrow"
              onClick={left}
              
              style={{
                transform: 'rotate(180deg)',
                cursor: "pointer",
                marginRight: "2rem",
                border: '1px solid black',
                borderRadius: "50%"
              }} />
          <img src={arrow} alt="arrow"onClick={right} style={{border:'1px solid black',cursor:"pointer", borderRadius:"50%"}} />
        </div>
          <div onClick={down}>
          
          <img src={arrow} alt="arrow"  style={{transform:'rotate(90deg)', cursor:"pointer",border:'1px solid black', borderRadius:"50%"} }/>
        </div>
      </div>
      <div className="table">
        <table>
            {rowObject.map(rowi => {
              return <tr>
                {columnObject.map((columni) => {
                return <td style={rowi===rowj && columni===columnj?{background:'grey'}:{}}></td>
              })}
            </tr>
          })}  
        </table>
      </div>
    </div></div>
  );
}

export default App;
