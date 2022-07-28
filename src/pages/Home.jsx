import React from 'react'
import { useDispatch } from 'react-redux';
import RecipeReviewCard from '../components/Card';
import { Functionalities } from '../components/Functionalities';

export const Home = () => {
  const [sort, setSort]=React.useState(null);
  const [rating, setRating]=React.useState()
  const [page, setPage]=React.useState(1);
  const [sortType, setSortType]=React.useState("")
const [itemsData, setItemsData]=React.useState({
  isLoading:false,
  isErr:false,
  data:[]
})

  const token =5;
const itemsFetch=(url,method,bodyData,header)=>{
setItemsData(prev=>({...itemsData,isLoading:true, isErr:false}))
  fetch(`http://localhost:8080/products?_page=${page}&_limit=12&_sort=price&_order="${sort}`)
  .then(res=>res.json())
  .then(result=>{

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
