
import React from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import FilterBox from '../components/FilterBox/FilterBox';
import ContentBox from '../components/ContentBox';
export default function Home({dataFetched}) {
  React.useEffect( ()=>{
    setLaunchYear(JSON.parse(window.localStorage.getItem('year'))?JSON.parse(window.localStorage.getItem('year')):"")
    setLaunch(JSON.parse(window.localStorage.getItem('launch'))?JSON.parse(window.localStorage.getItem('launch')):"")
    setLanding(JSON.parse(window.localStorage.getItem('landing'))?JSON.parse(window.localStorage.getItem('landing')):"")
},[])
  const [launchYear,setLaunchYear] = React.useState('')
  const [launch,setLaunch] = React.useState('')
  const [landing,setLanding] = React.useState('')
  const [content,setContent] = React.useState('')
  const [loader,setLoader]= React.useState(false)
  const [launchYearToggle, setLaunchYearToggle] = React.useState(false)
  const [launchToggle,setLaunchToggle] = React.useState(false)
  const [landingToggle,setLandingToggle] = React.useState(false)
 
  React.useEffect(()=>{
    
let url = 'https://api.spaceXdata.com/v3/launches?limit=100?'
    if((launchYear || launch || landing) || (launchYearToggle ||launchToggle ||landingToggle)){
      if(launchYear){
        url += `&launch_year=${launchYear}`
      }
      if(launch){
        url+=`&launch_success=${launch}`
      }
      if(landing){
        url+=`&land_success=${landing}`
      }
      setLoader(true)
      fetch(url)
      .then(res=>res.json())
      .then(res=>{
        setLoader(false)
        setContent(res)
      })
      .catch(err=>{
        setLoader(false)
        console.log(err)
      })
    }
    
  },[launchYear,launch,landing])
  function setLaunchYearHandler(data){
      if(data === launchYear){ 
        localStorage.removeItem('year')
        setLaunchYear('')
        setLaunchYearToggle(true)
      }else{
        localStorage.setItem('year',JSON.stringify(data))
        setLaunchYear(data)
        setLaunchYearToggle(false)
      }

  }
  function setLaunchHandler(data){
    if(data === launch){
      localStorage.removeItem('launch')
      setLaunch('')
      setLaunchToggle(true)
    }else{
      localStorage.setItem('launch',JSON.stringify(data))
      setLaunch(data)
      setLaunchToggle(false)
    }

  }
  function setLandingHandler(data){
    if(data === landing){
      localStorage.removeItem('landing')
      setLanding('')
      setLandingToggle(true)
    }else{
      localStorage.setItem('landing',JSON.stringify(data))
      setLanding(data)
      setLandingToggle(false)
    }

  }
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <FilterBox setLaunchYear={setLaunchYearHandler} launchYear={launchYear} launch={launch} setLaunch={setLaunchHandler} landing={landing} setLanding={setLandingHandler}/>
      <ContentBox loader={loader} dataFetched={content?content:dataFetched}/>
    </div>
    </>
  )
}


export async function getServerSideProps() {
  const data = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
  const dataFetched = await data.json();
  return { props: { dataFetched } }
}