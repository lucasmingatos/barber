import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        <p>Segunda-Feira, 5 de agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover" />
        </div>

      </div>
    </div>
  )
}

export default Home
