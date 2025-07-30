import {useState, useEffect} from "react"

import Category from "./components/Category"
import PopUp from "./components/Popup"

//images
import background from "./images/background.jpg"
import art from "./images/art.jpg"
import food from "./images/food.jpg"
import landscape from "./images/landscape.jpg"
import fantasy from "./images/fantasy.jpg"

function App() {
  const [popupClose, setPopupClose] = useState(true)
  const [formData, setFormdata] = useState({name : "", email : ""})
  const [loadingSvg, setLoadingSvg] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [isReversed, setIsReversed] = useState(false)

  //tailwind styles
  const container = `flex flex-col `
  const headerAndFooter = `bg-gradient-to-b from-neutral-200 to-neutral-100 
                           border-neutral-300 shadow-neutral-800/20 p-3`
  const header = `border-b shadow-lg mb-10 `
  const footer = `border-t shadow-top mt-10`
  const title = `text-2xl font-semibold text-neutral-700`
  const main = `p-3 flex flex-col gap-4 mx-auto flex-1`
  const copyright = `text-lg text-center italic font-light`
  const form = `flex flex-col gap-2 mt-20 w-10/12`
  const inputs = `bg-neutral-300 rounded-lg border-purple-600 p-2 mb-2`
  const containerBtn = `mt-20 flex gap-5 `
  const containerBtnReverse = `mt-20 flex gap-5 flex-row-reverse`
  const btn = `flex-1 px-4 py-2 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-600
                 hover:transform hover:scale-105 active:scale-95 border border-purple-600`
  //

  useEffect(() => {setTimeout(() => setPopupClose(false), 1500)}, [])

  const closePopup = () => setPopupClose(true)
  const handleChange = e => {
      const {name, value} = e.target
      setFormdata(d => ({...d, [name] : value}))
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLoadingSvg(true)
    setTimeout(() => {setLoadingSvg(false), setCompleted(true)}, 3000)
  }
  
  const handleOnMouseEnter = () =>  setIsReversed(true)
  const handleOnMouseleave = () => setIsReversed(false)

  return (
    <div className={container}>
     <header className={`${header} ${headerAndFooter}`}>
      <h1 className={title}>Free Wallpapers</h1>
     </header>
     <main className={main}>
      <Category title="Background wallpapers..." src={background} alt="lots of small white stone on the floor" />
      <Category title="Food wallpapers......" src={food} alt="tiramisu dessert, cinnamon and chocolate in the background"/>
      <Category title="Art wallpapers..." src={art} alt="a mixture of warm colors"/>
      <Category title="Landscapes wallpapers..." src={landscape} alt=" a lake, mountains in the background, cloudy sky"/>
      <Category title="Fantasy wallpapers..." src={fantasy} alt="floating island in the clouds"/>
     </main>
     <footer className={`${footer} ${headerAndFooter}`}>
      <p className={copyright}>FreeWallpapers@2025</p>
     </footer>
     <PopUp closePopup={closePopup} isClosed={popupClose} svg={loadingSvg} completed={completed}>
        <form className={form} onSubmit={handleSubmit}>
          <input 
            className={inputs} 
            type='text' 
            name="name" 
            placeholder='Enter your full name...' 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            className={inputs} 
            type='email' 
            name='email' 
            placeholder='Enter your email...' 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className={!isReversed ? containerBtn : containerBtnReverse}>
            <button className={btn} role="submit">Accept</button>
            <button className={btn} type="button" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseleave}>Decline</button>
          </div>
        </form>
     </PopUp>
    </div>
  )
}

export default App
