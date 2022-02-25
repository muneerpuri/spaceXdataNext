import styles from './style.module.css'
import DataCard from '../DataCard'
export default function ContentBox({dataFetched ,loader}){
    return (

        loader?<div className={styles.loaderBox}> <div className={styles.loader}></div></div>:<div className={styles.ContentContainer}>
            {dataFetched && dataFetched.map((el,index)=>{

                return <div key={index}> <DataCard 
                flightNumber={el.flight_number}
                name={el.mission_name}
                image={el.links.mission_patch}
                year={el.launch_year}
                ids={el.mission_id}
                launch={el.launch_success}
                land={el.rocket.first_stage.cores[0].land_success}
                /></div>
            })}
        </div>
    )
}