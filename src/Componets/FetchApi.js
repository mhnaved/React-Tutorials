
import React from 'react'
import {useState, useEffect} from "react";
import { get } from 'react-scroll/modules/mixins/scroller';

function FetchApi() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/todos/'
   

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(URL)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            getData(response);
        })
    }

  return (
    <div>
        <tbody>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
            {data.map((item, i)=> (
                <tr key={i}>
                    <th>{item.userId}</th>
                    <th>{item.id}</th>
                    <th>{item.title}</th>
                    <th>{item.completed}</th>

                </tr>
            ))}
        </tbody>
      
    </div>
  );
}

export default FetchApi

// function FetchApi() {
//     const [data, getData] = useState([])
//     const URL = 'https://jsonplaceholder.typicode.com/todos/'
//     useEffect(()=>{
//        fetchData()
//     }, [])
//     const fetchData = ()=>{
//         fetch(URL)
//         .then((resp) =>resp.json())
//         .then((response)=>{
//             console.log(response)
//             getData(response)
//         })

//     }

    
//   return (
//     <div>
// <tbody>
//     <tr>
//         <th>userId</th>
//         <th>Id</th>
//         <th>title</th>
//         <th>completed</th>
//     </tr>
//     {data.map((item,i)=>(
//         <tr key={i}>
//             <td>{item.userId}</td>
//             <td>{item.Id}</td>
//             <td>{item.title}</td>
//             <td>{item.completed}</td>
//         </tr>
//     ))}
// </tbody>
//     </div>

// );
// }

// export default FetchApi

