import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function () {
  const [data, error, loading] = useJsonFetch(process.env.REACT_APP_GET_ERROR, 'error');

  return (
    <>
        <h2>Error:</h2>
        {error && <div>{error.status}</div>}
        {loading && <div>ERROR</div>}
        {data && <div>{data.status}</div>}
    </>
  )
}
