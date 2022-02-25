import styles from './style.module.css'
import TitleBox from '../TitleBox'
function FilterBox({setLaunchYear,launchYear,launch,setLaunch,landing, setLanding}) {
    let yearArr = [];
    let successfulLaunch = ['true','false']
    let successfulLanding = ['true','false']
    for(let i = 2006; i<=2020  ; i ++){
        yearArr.push(i)
    }
  return (
    <div className={styles.filterContainer}>
        <div className={styles.header}>
            Filters
        </div>
        <TitleBox title="Launch Year"/>
        <div className={styles.btnBox}>
            {yearArr.map((item,index)=>{
                return <button key={index} onClick={()=>{
                    setLaunchYear(item)
                }} className={launchYear === item? styles.btnStyleActive:styles.btnStyle}>{item}</button>
            })}
        </div>
        <TitleBox title="Successful launch"/>
         <div className={styles.btnBox}>
            {successfulLaunch.map((item,index)=>{
                return <button onClick={()=>{
                    setLaunch(item)
                }} key={index} className={item === launch? styles.btnStyleActive:styles.btnStyle}>{item}</button>
            })}
        </div>
        <TitleBox title="Successful Landing"/>
        <div className={styles.btnBox}>
            {successfulLanding.map((item,index)=>{
                return <button onClick={()=>{
                    setLanding(item)
                }}
                 key={index} className={item === landing? styles.btnStyleActive:styles.btnStyle}>{item}</button>
            })}
        </div>
        
    </div>
  )
}

export default FilterBox