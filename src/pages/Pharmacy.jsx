import React from 'react'
import { useDispatch } from 'react-redux';
import RecipeReviewCard from '../components/Card';
import { Functionalities } from '../components/Functionalities';

export const Pharmacy = () => {
  
  const [sort, setSort]=React.useState(null);
  const [rating, setRating]=React.useState(0.5)
  const [page, setPage]=React.useState(1);
  const [sortType, setSortType]=React.useState("")
const [itemsData, setItemsData]=React.useState({
  isLoading:false,
  isErr:false,
  data:[]
})


  const token =5;
const itemsFetch=(url,method,bodyData,header)=>{
  console.log(sort)
setItemsData(prev=>({...itemsData,isLoading:true, isErr:false}))
  fetch(`http://localhost:8080/products?_page=${page}&_limit=12&category_like=pharmacy&_sort=price&_order=${sort}&rating_gte=${rating}`)
  .then(res=>res.json())
  .then(result=>{
console.log(result)
    setItemsData({
      isLoading:false,
      isErr:false,
      data: result
    })
  })
  .catch(err=>setItemsData({
    isLoading:false,
    isErr:true
  }))
}

React.useEffect(() => {
  console.log(rating,"rating")
  itemsFetch( `http://localhost:8080/products`,"GET",null,null,page, sort)
  console.log(sort)
}, [sort,rating,page, sortType])

const value={sort,setSort, rating,setRating,page,setPage, sortType, setSortType}



  return (
    <div style={{display:"grid", gridTemplateColumns:" auto auto auto" }}>
      <Functionalities value={value}/>
      {
        itemsData.data?.map(ele=> <RecipeReviewCard key={ele.id}  item={ele}/>)
      }
    </div>
  )
}
