import { AiOutlineClose } from 'react-icons/ai';
import loading from "../animations/loading.svg"

export default function PopUp({isClosed, closePopup, children, svg, completed}){
    const container = `bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800
                       rounded-lg shadow-lg shadow-neutral-800/30 m-auto text-neutral-300
                       border border-purple-600 flex flex-col text-purple-600 w-9/12 h-9/12
                       fixed top-0 bottom-0 left-0 right-0`
    const btnClose = `ml-auto p-1 rounded-lg border border-purple-600 shadow-lg shadow-neutral-300/20
                      hover:transform hover:scale-115 active:scale-95 `
    const compTitle = `text-3xl font-bold p-3 flex-1 px-4 py-2 rounded-lg 
                       bg-gradient-to-br from-neutral-700 to-neutral-600
                       border border-purple-600 text-center mt-20`

    return(
        !isClosed && (
        <div className={container}>
            <div className="flex p-3">
               <button className={btnClose} onClick={closePopup} disabled={!completed} aria-label="close popup">
                  <AiOutlineClose className="h-6 w-6" />
               </button>
            </div>
            <section className="flex flex-col items-center p-3">
                { 
                  svg ?
                    <>
                      <img src={loading} alt='' className="mt-30" />
                      <p className="text-2xl font-semibold mt-30">Taking care of your data😁</p>
                    </> :
                  completed ?
                    <>
                      <h2 className={compTitle}>Thank you!!!😍</h2>
                      <p className="text-2xl mt-30 font-semibold">Your data are safe with us</p>
                      <p className="italic font-light">You can trust us😂🤑</p>
                    </> : 
                    <>
                      <h2 className="text-3xl font-bold mb-16 mt-4">Personal data </h2>
                      <div className='flex flex-col items-center'>
                        <p className="text-lg w-10/12 text-center">by clicking accept you consent the use of your personal data</p>
                      </div>
                      {children}
                    </>
                }
            </section>
        </div> )
    )
}