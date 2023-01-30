import styles from '../styles'
import { arrowUp } from '../assets/assets'

function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[130px] h-[130px]
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart}font-poppins font-medium text-[18px] leading-[23px]`}>

            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                <span className='text-gradient'>Get</span>
            </p>
                <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
            </div>
            
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                <span className='text-gradient'>Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted