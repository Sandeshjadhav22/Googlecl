import React, { useState } from 'react';
import './Table.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import { dummyData } from './dummyData';


const Table = () => {
  // this is dummyData
  

   const [value,setValue] = useState('');
       const [dataSource,setDataSource] = useState(dummyData);
       const [tableFilter,setTableFilter] = useState([]);
       const filterData = (e) => {
        if(e.target.value !== ""){
            setValue(e.target.value);
            const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTableFilter([...filterTable])
        }else{
            setValue(e.target.value);
            setDataSource([...dataSource])
        }
       }

  return (
    <div className="table__body">
      
      <div className="background_images">

      <img src={image1} id="img1" alt="Image 1" />
      <img src={image2} id="img2" alt="Image 2" />
      <img src={image3} id="img3" alt="Image 3" />
      <img src={image4} id="img4" alt="Image 4" />

      </div>

      <div className="tableinfo">

    <div className="table-upper">
      <div className="Texthead">
            <h1>Google Cloud Study Jams 23-24</h1>
            <p className="Para">with Dmce</p>
          </div>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search your name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={value}
              onChange={filterData}
            />
    
          </div>
      </div>

       
        <div className="table__container">
          <table>
            <thead className="thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Skill</th>
                <th>Gen Ai</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {value.length > 0
                ? tableFilter.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td className="tdclass">{data.id}</td>
                        <td className="tdclass">{data.NAME}</td>
                        <td className="tdclass">{data.COURSES}</td>
                        <td className="tdclass">{data.SKILL}</td>
                        <td className="tdclass">{data.GEN_AI}</td>
                        <td className="tdclass">{data.DUE_DATE}</td>
                        {/* <td className="tdclass">{data.STATUS}</td> */}
                        <td className="tdclass">
                          <p className={data.STATUS}>{data.STATUS}</p>
                        </td>
                      </tr>
                    );
                  })
                : dataSource.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td className="tdclass">{data.id}</td>
                        <td className="tdclass">{data.NAME}</td>
                        <td className="tdclass">{data.COURSES}</td>
                        <td className="tdclass">{data.SKILL}</td>
                        <td className="tdclass">{data.GEN_AI}</td>
                        <td className="tdclass">{data.DUE_DATE}</td>
                        {/* <td className="tdclass">{data.STATUS}</td> */}
                        <td className="tdclass">
                          <p className={data.STATUS}>{data.STATUS}</p>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;