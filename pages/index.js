// import { useState, useEffect } from "react";
// import { Row, Col, Input, Button, Card } from "antd";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

// const Home = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoName, setTodoName] = useState("");

//   useEffect(() => {
//     const _storageData = localStorage.getItem("todos");
//     if (_storageData) {
//       setTodos(JSON.parse(_storageData));
//     }
//   }, []);

//   return (
//     <div className="container">
//       <div className="form">
//         <Row gutter={20}>
//           <Col span={18}>
//             <Input
//               placeholder="Write any text..."
//               value={todoName}
//               onChange={(e) => setTodoName(e.target.value)}
//             />
//           </Col>
//           <Col span={4}>
//             <Button
//               style={{ width: "100%" }}
//               type="primary"
//               icon={<PlusOutlined />}
//               onClick={() => {
//                 setTodos([...todos, todoName]);
//                 setTodoName("");
//                 localStorage.setItem(
//                   "todos",
//                   JSON.stringify([...todos, todoName])
//                 );
//               }}
//             >
//               Add
//             </Button>
//           </Col>
//           <Col span={2}>
//             <Button
//               style={{ width: "100%" }}
//               type="primary"
//               icon={<DeleteOutlined />}
//               onClick={() => {
//                  setTodos([])
//                  localStorage.setItem("todos", "")
//               }}

//               danger
//             />
//           </Col>
//         </Row>
//       </div>

//       <div className="todo-list">
//         {todos.map((item, index) => (
//           <Card hoverable key={index}>
//             <Row>
//               <Col span={23}>{item}</Col>
//               <Col span={1}>
//                 <Button
//                   danger
//                   type="primary"
//                   shape="circle"
//                   icon={<DeleteOutlined />}
//                   onClick={() => {
//                     setTodos(todos.filter((el) => el !== item));
//                     localStorage.setItem("todos", JSON.stringify(todos.filter((el) => el !== item)))
//                   }}
//                 />
//               </Col>
//             </Row>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { useEffect, useState } from "react";
// import { Card, Spin } from "antd";

// const { Meta } = Card;

// const Bar = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://rallycoding.herokuapp.com/api/music_albums")
//       .then((resp) => resp.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container">
//       {loading ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <Spin />
//             <p>Loading...</p>
//           </div>
//         </div>
//       ) : (
//         <div className="image-list">
//           {data.map((item, index) => (
//             <Card
//               key={index}
//               hoverable
//               cover={<img alt="example" src={item.image} />}
//             >
//               <Meta title={item.title} description={item.artist} />
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bar;
import {useState, useEffect} from 'react'
import { Spin } from 'antd';
import { Card } from 'antd';
const Home = ()=>{
  const { Meta } = Card;
const [data , setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
  .then((response)=> response.json())

   .then((res)=>{
      setData(res)

 setLoading(false)
})
},[])


  return (<>
 {loading ? (
  
 <div style={{ fontSize: 24 }} spin>
   
   <Spin/>
   <p>loading</p>
   </div>
 ):(<> {data.map((item, index)=>(

    <Card
    key={index}
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={item.image} />}
    >
      <Meta title={item.title}description={item.artist} />
    </Card>
    
  )

 ) }

</>)}
  </>)

}

export default Home