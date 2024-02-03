import { useEffect, useState } from "react"

function DigitalClock(){
    const [time,setTime]=useState(new Date());
    console.log(time);

    useEffect(() => {
        const intervalId=setInterval(() => {
            setTime(new Date());
        },1000)

        return () =>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let time = new Date(); // zamanı al
        let hours = time.getHours();
        hours = hours > 9 ? hours : "0" + hours; // saatleri kontrol et ve gerekli düzenlemeyi yap
        let minutes = time.getMinutes();
        minutes = minutes > 9 ? minutes : "0" + minutes; // dakikaları kontrol et ve gerekli düzenlemeyi yap
        let seconds = time.getSeconds();
        seconds = seconds > 9 ? seconds : "0" + seconds; // saniyeleri kontrol et ve gerekli düzenlemeyi yap
      
        return  `${hours}:${minutes}:${seconds}`; // biçimlendirilmiş zamanı döndür
      }
      

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}
export default DigitalClock