Project is initialized 
all modules installed are listed below

npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2

we are able to fetch the data from the rapidApi 
but can't able to laod.
there is an issue in parsing the file 


./src/components/Homepage.jsx 13:25
Module parse failed: Unexpected token (13:25)
You may need an appropriate loader to handle this file type.
|     data = _useGetCryptosQuery.data,
|     isFetching = _useGetCryptosQuery.isFetching;
>   var globalStats = data?.data?.stats;
|   // const globalStats = data?.data?.coins;
|

try to solve this error

https://captain-eo.hashnode.dev/an-easy-way-to-make-api-calls-redux-toolkit


 time : 53 min
