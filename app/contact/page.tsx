import DynamicHeading from "@/components/DynamicHeading"

const names = [
      "Contact",
]

const page = () => {
    return (
      <section className= "bg-[--background] flex flex-col items-center gap-4">
        <DynamicHeading names={names}/>
      </section>
    )
  }
  
  export default page
  