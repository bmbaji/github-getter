import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from 'axios';






 export const Home = () => {
    const { data, isLoading, refetch } = useQuery(["user"], () => {
        return axios.get(`https://api.github.com/users/${username}`).then((res) => res.data)
       
    })

    const refetchData = () => {
        refetch(`https://api.github.com/users/${username}`)
    }
    const [username, setUsername] = useState("bmbaji")

  
 

    if (isLoading){
        return <h1>loading...</h1>
    }
    return (
    <div className="home">
      <div className="header">
          <h1>Github Finder</h1>
          <img src="./github.png"></img>
      </div>
       <div className="container">
            <div className="row">
                <h1>Search for a Github User!</h1>
                <div className="search-bar">
                    <input type="text" className="input"value={username} onChange= {e => setUsername(e.target.value)} ></input>
                    <button onClick={refetchData}>Search</button>
                   
                </div>
                
                <div className="usercard">
                    <div className="useridentity">
                        <a href={data?.html_url} target= "_blank">
                            <img src={data?.avatar_url}/>
                        </a> 
                        <h2>Github Username: {data?.login}</h2>
                    </div>
                    <div className="userinfo">
                        <p>Bio: { data?.bio || "This user does not have a bio."}</p>
                        <p>Id: {data? data?.id: "None"}</p>
                        <p>Email: {data?.email || "This has not linked their email to their github"}</p>
                        <p> Twitter-username: {data?.twitter_username || "This user either does not have their Twitter linked or do not have Twitter."} </p>
                        <p> Public repos: {data?.public_repos || "None."}</p>
                        
                            <a className="gotopage" href={data?.html_url} target= "_blank">
                                Go to Github Page
                            </a>
                    

                    </div>
                
                </div>

            </div>
        </div> 
      
            
        </div>
      
      
     

    )
}