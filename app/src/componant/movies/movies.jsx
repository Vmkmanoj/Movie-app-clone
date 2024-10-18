import React, { useEffect, useState } from "react";
import { Input, Col, Row } from 'antd';
import "../movies/movies.css";
import logofont from "../movies/no-results.png"

function Movies() {
    const [Movie, setMovie] = useState("friend"); // Initialize with an empty string
    const [fining, setFining] = useState([]); // Initialize as an empty array

    const responce = async () => {
        if (Movie) { // Fetch only if there's a movie title
            const api = `http://www.omdbapi.com/?s=${Movie}&apikey=d80a6ff6`;

            try {
                const fetching = await fetch(api);
                const json = await fetching.json(); // Await the json conversion
                console.log(json);
                setFining(json.Search || []); // Set the movie data or empty array if no result
            } catch (error) {
                console.error("Error fetching data:", error);
                setFining([]); // Handle error by setting an empty array
            }
        }
    };

    useEffect(() => {
        responce(); // Fetch data when Movie changes
    }, [Movie]); // Add Movie as a dependency to fetch whenever it changes

    return (
        <>
            <div className="Search-button ml-52 mt-16">
                <Input
                    placeholder="input search text"
                    className="search ml-64 rounded-3xl"
                    allowClear
                    onChange={(e) => setMovie(e.target.value)}
                    style={{
                        width: 600,
                        height: 50,
                    }}
                />
            </div>

            <Row justify="space-evenly" className="mt-10 grid grid-rows-3 grid-flow-col gap-4">
                {fining.length > 0 ? (
                    fining.map((movie, index) => (
                        <Col span={3} key={index}>
                            <img  className="movie-image"
                                src={movie.Poster} 
                                alt={movie.Title} 
                                style={{ width: '1500%', maxWidth: '150px', height: 'auto',text:'white' }} 
                            />
                            <h3 style={{ textAlign: 'center' }} className="text-white w-28 mt-10 font-mono">{movie.Title}</h3>
                        </Col>
                    ))
                ) : (
                    <img src={logofont} className="m-24 h-96"></img>
                )}
            </Row>
        </>
    );
}

export default Movies;
