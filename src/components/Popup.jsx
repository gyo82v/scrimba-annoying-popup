import { AiOutlineClose } from 'react-icons/ai';
import loading from "../animations/loading.svg"

export default function PopUp({isClosed, closePopup, children, svg, completed}){
    const container = `bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800
                       rounded-lg shadow-lg shadow-neutral-800/30 m-auto text-neutral-300
                       border border-purple-600 flex flex-col text-purple-600 w-9/12 h-9/12
                       fixed top-0 bottom-0 left-0 right-0`
    const containerBtnClose = `flex p-3`
    const btnClose = `ml-auto p-1 rounded-lg border border-purple-600 shadow-lg shadow-neutral-300/20
                      hover:transform hover:scale-115 active:scale-95 `
    const icon = `h-6 w-6 `
    const mainSection = `flex flex-col items-center p-3 `
    const title = `text-3xl font-bold mb-16 mt-4`
    const desc = `text-lg w-10/12 text-center`

    return(
        !isClosed && (
        <div className={container}>
            <div className={containerBtnClose}>
               <button className={btnClose} onClick={closePopup} disabled={!completed}><AiOutlineClose className={icon} /></button>
            </div>
            <section className={mainSection}>
               <h2 className={title}>Personal data </h2>
               <div className='flex flex-col items-center'>
                {svg ? 
                      <>
                        <img src={loading} alt='' className='mb-4' />
                        <p className={desc}>stealing your data</p>
                      </> :
                completed ? 
                      <p className={desc}>data stolen</p> : 
                      <p className={desc}>by clicking accept you consent the use of your personal data</p>
                }
               </div>
               {children}
            </section>
        </div> )
    )
}