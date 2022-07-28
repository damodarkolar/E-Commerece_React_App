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

  return (
    <>
    <div>
        
    </div>
    <div>
            <Button disabled={page<=1} variant="contained"  onClick={()=>setPage(prev=> prev-1)}>-</Button>
            <Button >{page}</Button>
            <Button variant="contained" onClick={()=>setPage(prev=> prev+1)}>+</Button>
        </div>
        <div>
            <Button onClick={handleSortClick} name="asc" variant={sort==="asc" ? "outlined": "contained" }>ASE</Button>
            <Button onClick={handleSortClick} name="desc" variant={sort==="desc" ? "outlined": "contained"}>DSE</Button>
        </div>
    </>
  )
}
