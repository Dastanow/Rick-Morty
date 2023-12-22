import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredCharakter, setCurrentPage } from '../stor/characterSlice';
import Header from '../header/Header';
import fonk from '../pages/Rick_and_Morty_logo.webp'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import Product from '../product/Product';
import Input from '../Input/Input';
import './home.scss'

const Home = () => {
  const dis = useDispatch();
  const { character, ollPage, curentPage } = useSelector(
    (state) => state.character
  );
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  useEffect(() => {
    dis(
      // getCharakter({id})
      getFilteredCharakter({ page: curentPage, status, gender, name, species })
    );
  }, [dis, curentPage, status, gender, name, species,]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curentPage]);

  const onHandlePageChange = (int) => {
    console.log(int);
    dis(setCurrentPage({ page: int }));
  };
  return (
    <div>
  <div className="Home">
      <Header />
      <div className="rick">
        <img src={fonk} alt="rick" />
      </div>
      <Input
        name={name}
        setName={setName}
        setStatus={setStatus}
        setGender={setGender}
        gender={gender}
      />
      <div className="grid">
        {character?.data?.results?.map((item) => {
          return <Link to={`${item.id}`}> <Product key={item.id} {...item} /></Link>

        })}
      </div>
      <Pagination
        onChange={onHandlePageChange}
        total={ollPage * 10}
        current={curentPage}
      />
    </div>
  </div>
  )
}

export default Home

