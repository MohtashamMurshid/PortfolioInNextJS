import DynamicHeading from "@/components/DynamicHeading"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const names = [
      "جهة الاتصال الخاصة بي",
      "Мојот контакт",
      "我的聯絡方式",
      "私の連絡先",
      "My Contact"
]

const page = () => {
    return (
      <section className= "bg-[--background] flex flex-col items-center gap-4">
        <DynamicHeading names={names}/>
   
      </section>
    )
  }
  
  export default page
  