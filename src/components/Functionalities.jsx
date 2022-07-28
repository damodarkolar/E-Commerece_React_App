import { Button } from '@mui/material';
import React from 'react'






export const Functionalities = () => {
const [sort, setSort]=React.useState(null);
const [rating, setRating]=React.useState()
const [page, setPage]=React.useState(1);

const handleSortClick=(e)=>{
    console.log(e.target.name)
    console.log(sort)
    if(e.target.name===sort){
        setSort(null)
    }else{
        setSort(e.target.name)
    }
    console.log(e.target.name)
}

  return (
    <>
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
