import React, { useEffect, useState } from 'react'
import './blogpage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCharakter } from '../stor/characterSlice';
const Blogpage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {character} = useSelector((state) => state.character)
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getCharakter(id))
    }, [id])
  return (
    <div>
    <h1>{id}</h1>
    {character?.data?.results?.map((item) => {
      return <h1>{item.name}</h1>
    })}
 
    </div>
  )
}

export default Blogpage