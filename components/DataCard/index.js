import styles from './style.module.css'
import Image from 'next/image'
export default function DataCard({flightNumber,name,image,year,ids,launch,land}){
    return (
    <div className={styles.container} >
        {image &&<div className={styles.imgBox}>
            <Image
            src={image}
            alt={image}
            width={200}
            height={200}
            placeholder="blur"
            responsive={true.toString()}
            blurDataURL={image}
            />
        </div>}
        <div className={styles.title}>
            {name + " "+'#'+flightNumber}
        </div>
        <div className={styles.listBox}>
            <div className={styles.missionIDsTitle}>
                Mission Ids:
            </div>
            <ul>
                {
                   ids.length>0? ids.map((el,index)=>{
                    return  <li key={index}>{el}</li>
                    }): <li key={'hello321'}>Unavailable</li>
                }
            </ul>
        </div>
        <div className={styles.infoBox}>
            <div className={styles.infoTitle}>
                Launch year :
            </div>
            <div className={styles.infoData}>
                {year?year:"Unavailable"}
            </div>
        </div>
        <div className={styles.infoBox}>
            <div className={styles.infoTitle}>
                Successful Launch :
            </div>
            <div className={styles.infoData}>
                {launch?launch.toString():'Unavailable'}
            </div>
        </div>
        <div className={styles.infoBox}>
            <div className={styles.infoTitle}>
            Successful landing :
            </div>
            <div className={styles.infoData}>
                {land?land.toString():'Unavailable'}
            </div>
        </div>
    </div>
    )
}