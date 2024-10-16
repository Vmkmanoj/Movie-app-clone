import React from "react";
import { useState } from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "../movies/movies.css"





function Movies(){

    const [Movie,setMovie] = useState();

    // const onSearch = (value, _e, info) => setMovie(value);

    console.log(Movie);




    return(

        <div className="Search-button ml-52 mt-16">

            {/* <input value={Movie} onChange={(e)=>setMovie(e.target.value)}></input> */}
           
            <Input
      placeholder="input search text"
      className="ml-64 rounded-3xl"
      allowClear
      onChange={(e)=>setMovie(e.target.value)}
      style={{
        width: 600,
        height:50,
      }}
      
    />
            
        </div>

    )



}

export default Movies;