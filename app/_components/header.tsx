import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import SidebarSheet from "./sidebar-sheet";


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

                    {/*sidebar criado */}
                    <SidebarSheet />

                </Sheet>

            </CardContent>
        </Card>
    );
}

export default Header;