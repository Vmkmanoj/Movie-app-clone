import react from "react"




function Upcome(props){

    const {upcome} = props.ele


    return(
        <>

        <div className="flex justify-center">

            <h1 className="m-10 text-white text-3xl font-medium">Upcoming Movies</h1>

        </div>
      <div className="flex gap-5 justify-center ">
        {upcome.map((movies,items)=>(
            <div key={items} className="flex gap-7 flex-col mt-10 w-64 ">
                    <img src={movies.cover} alt="" className="size-72" />
                    <div className="flex  flex-col items-center gap-3">

                    <h1> {movies.name}</h1>

                    <p>{movies.time}</p>
                    </div>
            </div>
              ))}
      </div>

        
        
        </>
    )
}

export default Upcome;