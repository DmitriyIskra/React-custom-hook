import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data() {
  const [data, error, loading] = useJsonFetch(process.env.REACT_APP_GET_DATA, 'data');
  
  return (
    <>
        <h2>Data:</h2>
        {error && <div>ERROR</div>}
        {loading && <div>ERROR</div>}
        {data && <div>{data.status}</div>}
    </>
  )
}
