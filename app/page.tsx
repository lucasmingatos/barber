import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

//RECEBER AGENDAMENTOS COMO PROP FUTURAMENTE

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })

  return (
    <div>
      {/*header*/}
      <Header />
      <div className="p-5">
        {/*texto*/}
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        <p>Segunda-Feira, 5 de agosto</p>

        {/*busca*/}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/*busca rápida*/}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-3" variant="secondary" key={option.title}>
              <Image
                alt={option.title}
                src={option.imageUrl}
                width={16}
                height={16} />
              {option.title}
            </Button>
          ))}
        </div>

        {/*imagem*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover" />
        </div>

        {/*agendamentos*/}
        <BookingItem />

        {/*recomendados*/}
        <h2 className="m-3 mt-6 uppercase text-gray-400 font-bold text-xs">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/*populares*/}
        <h2 className="m-3 mt-6 uppercase text-gray-400 font-bold text-xs">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>


      </div>

      {/*populares*/}
      <footer>
        <Card className="px-5 py-6">
          <CardContent>
            <p className="text-sm text-gray-400">
              ® 2024 Copyright <span className="font-bold">Lucas Mingatos</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div >
  )
}

export default Home
