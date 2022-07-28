import { Button } from '@mui/material';
import React from 'react'






export const Functionalities = (probs) => {

const {sort, rating, page, setSort, setPage, setRating, setSortType} =probs.value
const handleSortClick=(e)=>{
    if(e.target.name===sort){
        setSort(null)
    }else{
        setSort(e.target.name)
    }
}

const handleRating = (e) =>{

    if(rating==e.target.value){
        setRating(0.5)
    }else{
        setRating(e.target.value)
    }
}
  return (
    <>
    <div>
    <Button  variant={rating==4 ? "outlined" : "contained"} onClick={handleRating} value={4}>4</Button>      
    <Button  variant={rating==3 ? "outlined" : "contained"} onClick={handleRating} value={3}>3</Button>   
    <Button  variant={rating==2 ? "outlined" : "contained"} onClick={handleRating} value={2}>2</Button>   
    <Button  variant={rating==1 ? "outlined" : "contained"} onClick={handleRating} value={1}>1</Button>     
    </div>
    <div>
            <Button disabled={page<=1} variant="contained"  onClick={()=>setPage(prev=> prev-1)}>{"<"}</Button>
            <Button >{page}</Button>
            <Button variant="contained" onClick={()=>setPage(prev=> prev+1)}>{">"}</Button>
        </div>
        <div>
            <Button onClick={handleSortClick} name="asc" variant={sort==="asc" ? "outlined": "contained" }>ASE</Button>
            <Button onClick={handleSortClick} name="desc" variant={sort==="desc" ? "outlined": "contained"}>DSE</Button>
        </div>
    </>
  )
}
