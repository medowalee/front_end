'use client'

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis';

export default function ProductSection() {
    const [productList,setProductList]= useState([])
    useEffect(() => {
        getLatestProducts_();
    }, [])
    const getLatestProducts_ = () => {
        ProductApis.getLatestProducts().then(res => {
            console.log(res.data.data);
            setProductList(res.data.data);
        })
    }


    return (
        <div className='px-10 md:px-20 dark:bg-gray-900'>
            <ProductList productList={productList}/>
        </div>
    )
}