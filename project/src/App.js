import React from "react";
import Router from "./Router/Router";

function App() {

    // let inputSearch = React.createRef();

    // const [results, setResults] = useState({})
    // const [repos, setRepos] = useState([])
    // const [starreds, setStarreds] = useState([])
    // const [showReposOrStarred, setShowReposOrStarred] = useState('')
   


    // const searchUser = () => {
    //   let getUserUrl = url+inputSearch.current.value+authentication
    //   axios.get(getUserUrl)
    //   .then((res) => {
    //     setResults(res.data)


    //     if (repos && starreds) {
    //       setStarreds([])
    //       setRepos([])
    //     }

    //   })
    //   .catch((err) => {
    //     alert('Usuário não encontrado')
    //     inputSearch.current.value = ''
    //   })
    // }




    // const getRepos = () => {
    //   let getRepoUrl = url+results.login+'/repos'+authentication
    //   axios.get(getRepoUrl)
    //   .then((res) => {
    //     setRepos(res.data)
    //     setShowReposOrStarred('repo')
    //   })
    //   .catch((err) => {
    //     alert('Error') // tratar possíveis erros
    //   })
    // }

    // const reposInfo = repos.map((repo) => {
    //   return(
    //     <div>
    //       <p>{repo.name}</p>
    //     </div>
    //   )
    // })

    // const starredRepos = starreds.map((repo) => {
    //   return(
    //     <div>
    //       <p>{repo.name}</p>
    //     </div>
    //   )
    // })




    // const getStarreds = () => {
    //   let starredUrl = url+results.login+'/starred'+authentication
    //   axios.get(starredUrl)
    //   .then((res) => {
    //     setStarreds(res.data)
    //     setShowReposOrStarred('starred')
    //   })
    //   .catch((err) => {
    //     alert('Error')
    //   })
    // }

    
    
    // const reposEStarred = <div><button onClick={getRepos}>Repos</button>
    // <button onClick={getStarreds}>Starred</button></div>
 


  return (
    <div>
        {/* <input ref={inputSearch}
        placeholder='Search...'/>
        
        <button onClick={() => searchUser()}>Procurar</button>
        <hr/>

        <img src={results.avatar_url}/>
        <div>
          {results.login}
          {results.followers}
          {results.following}
        </div>


        <img href={results}/>
        {results.company}
        {results.location}
        <a href={results.html_url}>{results.login}</a>

        
        {results.login ? reposEStarred : <p>Pesquise por um usuário</p>}
        <hr/>
        
        {
         showReposOrStarred === 'repo' ? reposInfo : starredRepos
        } */}
      <Router/>

      </div>
  );
}

export default App;
