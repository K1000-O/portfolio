import Image from "next/image"

export default function Header(props) {
  return (
    <section className="flex flex-row w-full items-center justify-center text-center p-24" id="header" style={{
        height: 100, 
        margin: 0,
        backgroundColor: 'white'
      }
    }>
      <div className="flex flex-col justify-center">
        <h1 id="name">{props.name}</h1>
        <Image src={props.image} alt="logo" height={100} width={100} className="rounded-full" />
      </div>
    </section>
  )
}

