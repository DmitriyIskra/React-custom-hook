import React from 'react';
import { useState, useEffect } from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading() {
  const [load, setLoad] = useState()
  const [data, error, loading] = useJsonFetch(process.env.REACT_APP_GET_LOADING, 'loading');


  return (
    <>
        <h2>Loading:</h2>
        <div>Wait please about 5sec.</div>
        {error && <div>{error.status}</div>}
        {loading && <div>{loading.status}</div>}
        {data && <div>{data.status}</div>}
    </>
  )
}
