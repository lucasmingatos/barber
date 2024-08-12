import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { notFound } from "next/navigation";
import ServiceItem from "@/app/_components/service-item";
import PhoneItem from "@/app/_components/phone-item";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SidebarSheet from "@/app/_components/sidebar-sheet";

interface BarbershopPageProps {
    params: {
        id: string,
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    //chamar banco
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    })

    if (!barbershop) {
        return notFound()
    }


    return (
        <div>
            {/*imagem da barbearia*/}
            <div className="relative h-[250px] w-full">
                <Image
                    alt={barbershop.name}
                    src={barbershop?.imageUrl}
                    fill
                    className="object-cover"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline" className="absolute right-4 top-4">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    {/*sidebar criado */}
                    <SidebarSheet />

                </Sheet>

            </div>

            {/*titulo*/}
            <div className="p-5 border-b border-solid">
                <h1 className="text-xl font-bold mb-3">{barbershop.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop?.address}</p>
                </div>

                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (499 Avaliações)</p>
                </div>
            </div>

            {/*desc*/}
            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="font-bold uppercase text-gray-400 text-xs">Sobre nós</h2>
                <p className="text-sm">{barbershop?.description}</p>
            </div>

            {/*serviços*/}
            <div className="p-5 space-y-3 border-b divide-solid">
                <h2 className="font-bold uppercase text-gray-400 text-xs">Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service) => (
                        <ServiceItem
                            key={service.id}
                            barbershop={barbershop}
                            service={service}
                        />))}
                </div>
            </div>

            {/*contatos*/}
            <div className="p-5 space-y-3">
                {barbershop.phones.map(phone => (
                    <PhoneItem key={phone} phone={phone} />
                ))}
            </div>
        </div>
    )
}

export default BarbershopPage;