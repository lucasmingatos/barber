"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";

const SidebarSheet = () => {

    const { data } = useSession();

    const handleLoginWithGoogleClick = async () => {
        await signIn("google")
    }

    const handleLogoutClick = () => signOut();

    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">




                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user?.image ?? ""}></AvatarImage>
                        </Avatar>

                        <div className="flex flex-col ml-3">
                            <p className="font-bold">{data.user.name}</p>
                            <p className="text-sm">{data.user.email}</p>
                        </div>
                    </div>

                ) : (

                    <>
                        <h2 className="font-bold">Olá, faça seu login.</h2>
                        <Dialog>

                            <DialogTrigger asChild>
                                <Button size="icon">
                                    <LogInIcon />
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="w-[90%]">
                                <DialogHeader>
                                    <DialogTitle>Faça login na plataforma</DialogTitle>
                                    <DialogDescription>
                                        Conect-se usando sua conta do Google.
                                    </DialogDescription>
                                </DialogHeader>

                                <Button
                                    variant="outline"
                                    className="gap-1 font-bold"
                                    onClick={handleLoginWithGoogleClick}
                                >
                                    <Image
                                        alt="Fazer login com google"
                                        src="/google.svg"
                                        width={18}
                                        height={18}
                                    />
                                    Google
                                </Button>

                            </DialogContent>
                        </Dialog>
                    </>
                )}

            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                <SheetClose asChild>
                    <Button className="gap-2 justify-start" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Início
                        </Link>
                    </Button>
                </SheetClose>

                <Button className="gap-2 justify-start" variant="ghost">
                    <CalendarIcon className="gap-2 justify-start" />
                    Agendamentos
                </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                {quickSearchOptions.map((option) => (
                    <SheetClose key={option.title} asChild>
                        <Button
                            className="gap-2 justify-start"
                            variant="ghost"
                            asChild
                        >
                            <Link href={`/barbershops?service=${option.title}`}>
                                <Image
                                    src={option.imageUrl}
                                    height={18}
                                    width={18}
                                    alt={option.title}
                                />
                                {option.title}
                            </Link>
                        </Button>
                    </SheetClose>
                ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
                <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    onClick={handleLogoutClick}
                >


                    <LogOutIcon size={18}
                    />
                    Sair da conta
                </Button>
            </div>

        </SheetContent>

    );
}

export default SidebarSheet;