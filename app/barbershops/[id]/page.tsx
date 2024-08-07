import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { notFound } from "next/navigation";

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

            </div>

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
        </div>
    )
}

export default BarbershopPage;