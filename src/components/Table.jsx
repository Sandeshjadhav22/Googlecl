import React from 'react';
import "./Table.css";
import { useState } from 'react';

const Table = () => {

    const dummyData = [
        {
          id: 1,
          NAME: 'Manas Kulkarni',
          COURSES: 4,
          SKILL: 4,
          GEN_AI: 1,
          DUE_DATE: '18/10/23',
          STATUS: 'not completed',
        },
        {
          id: 2,
          NAME: 'Sandesh Jadhav',
          COURSES: 4,
          SKILL: 4,
          GEN_AI: 1,
          DUE_DATE: '18/10/23',
          STATUS: 'completed',
        },
        {
          id: 3,
          NAME: 'Viraj Sharma',
          COURSES: 4,
          SKILL: 4,
          GEN_AI: 1,
          DUE_DATE: '18/10/23',
          STATUS: 'completed',
        },
        {
          id: 4,
          NAME: 'Rohit Koli',
          COURSES: 4,
          SKILL: 4,
          GEN_AI: 1,
          DUE_DATE: '18/10/23',
          STATUS: 'not completed',
        },
        {
          id: 5,
          NAME: 'Akkash Chopra',
          COURSES: 4,
          SKILL: 4,
          GEN_AI: 1,
          DUE_DATE: '18/10/23',
          STATUS: 'not completed',
        },
      ];
      

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
    <div>
        <div class="tableinfo">
            <div class="Texthead"><h1>Google Cloud Study Jams 23-24</h1> <p class="Para">with Dmce</p></div>
            <div class="input-group mb-4 ">
  <input type="text" class="form-control" placeholder="Search your name" aria-label="Username" aria-describedby="basic-addon1" value={value} onChange={filterData}/>
</div>
        <table>
            <thead class="thead">
                <tr>
                    <th class="thclass">Sr.No</th>
                    <th class="thclass">Name</th>
                    <th class="thclass">Course</th>
                    <th class="thclass">skill</th>
                    <th class="thclass">Gen Ai</th>
                    <th class="thclass">Due Date</th>
                    <th class="thclass">Status</th>
                </tr>
            </thead>
            <tbody>
                {value.length > 0 ? tableFilter.map((data) => {
                    return(
                        <tr>
                            <td class="tdclass">{data.id}</td>
                            <td class="tdclass">{data.NAME}</td>
                            <td class="tdclass">{data.COURSES}</td>
                            <td class="tdclass">{data.SKILL}</td>
                            <td class="tdclass">{data.GEN_AI}</td>
                            <td class="tdclass">{data.DUE_DATE}</td>
                            <td class="tdclass">{data.STATUS}</td>
                            <td class="tdclass"> <p className={data.STATUS}></p></td>
                        </tr>
                    )
                })
            : 
            dataSource.map((data) => {
                return(
                    <tr>
                        <td class="tdclass">{data.id}</td>
                        <td class="tdclass">{data.NAME}</td>
                        <td class="tdclass">{data.COURSES}</td>
                        <td class="tdclass">{data.SKILL}</td>
                        <td class="tdclass">{data.GEN_AI}</td>
                        <td class="tdclass">{data.DUE_DATE}</td>
                        <td class="tdclass">{data.STATUS}</td>
                        <td class="tdclass"> <p className={data.STATUS}></p></td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Table;




