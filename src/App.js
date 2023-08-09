import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import './index.css';

function App() {
  const client = new QueryClient()
  const [username, setUsername] = useState("")
  return (
    <QueryClientProvider client={client}>
    <Home/>
   
   </QueryClientProvider>

 
  )
}

export default App;
