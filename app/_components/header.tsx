import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="justify-between items-center flex flex-row p-5">
                <Image alt="FSW-Barber" src="/logo.png" height={18} width={120} />

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        <div className="py-5 border-b border-solid flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://ionicframework.com/docs/img/demos/avatar.svg"></AvatarImage>
                            </Avatar>

                            <div className="flex flex-col ml-3">
                                <p className="font-bold">Lucas Mingatos</p>
                                <p className="text-sm">lucasmingatos@hotmail.com</p>
                            </div>
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
                                <Button
                                    className="gap-2 justify-start"
                                    variant="ghost"
                                >
                                    <Image
                                        src={option.imageUrl}
                                        height={18}
                                        width={18}
                                        alt={option.title}
                                    />
                                    {option.title}
                                </Button>
                            ))}
                        </div>

                        <div className="py-5 flex flex-col gap-2">
                            <Button className="justify-start gap-2" variant="ghost">
                                <LogOutIcon size={18} />
                                Sair da conta
                            </Button>
                        </div>

                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;