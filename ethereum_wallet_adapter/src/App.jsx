//import { useEffect,useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
//import {QueryClient, QueryClientProvider,useQueryClient, useQuery} from '@tanstack/react-query';

// function App() {
//   const [posts, setPosts] = useState([]);

//   async function getPosts(){
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
//     const json = await response.json();
//     setPosts(json)
//   } catch(error) {

//   }
// }

//   useEffect(()=> {
//     setInterval(()=>{
//       getPosts()
//     },5000)
  
//   }, [])

// const queryClient = new QueryClient()

// async function getter() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const response = await data.json();
//   return response;
// }

// function App(){
//   return (
//    <QueryClientProvider client={queryClient}>
//     <Posts/>
//    </QueryClientProvider>
//   )
// }

// function Posts(){
//   const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: getter});

//   if(error){
//     return <div>
//       Error while fetching
//     </div>
//   }
//   if(isLoading){
//     return "Loading..."
//   }

//   return <div>
//   {JSON.stringify(data)}
// </div>
  
// }

// import {createPublicClient, http }from 'viem';
// import {mainnet} from 'viem/chains';

// const client = createPublicClient({
//   chain: mainnet,
//   transport: http(),
// })

// function App(){
//   async function getBalance(){
//     const res = await client.getBalance({adress: "0x755961d1aB4582fc1172d8C0914527E61EE94cb3"})
//     console.log(res);
//   }

//   return (
//     <div>
//       <button onClick={getBalance}>Get Balance</button>
//     </div>
//   )
// }

import {http, createConfig, WagmiProvider} from 'wagmi'
import {mainnet} from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

const queryClient = new QueryClient()

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]:http()
  },
})


function App(){
  return(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
    <div>
      <input type="text" placeholder='Address..'></input> 
      <button>Send 0.1 ETH  </button>
    </div>
    </QueryClientProvider>
    </WagmiProvider>
   
    
  )
}








export default App;
