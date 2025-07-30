export default function Category({title, alt, src}){
    const section = `shadow-lg shadom-neutral-800/30 p-3 rounded-lg 
                     bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-200`
    const titleStl = `text-lg font-semibold text-neutral-800 mb-4`
    const img = `rounded-lg h-[300px] w-full`
    return(
        <section className={section}>
            <h2 className={titleStl}>{title}</h2>
            <img src={src} alt={alt} className={img} />
        </section>
    )
}