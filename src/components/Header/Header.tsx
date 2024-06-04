import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/Button/Button";
import LogoImage from '/public/Logo.svg'
import ArrowIcon from '/public/arrow.svg'
import BurgerButton from '/public/Burger.svg'


export default function Header(){
    return (
        <header className={'flex justify-between items-center py-6'}>
            <Link href={'/'}>
                <LogoImage width={180} height={40} />
            </Link>
            <div className={'flex justify-center items-center gap-2'}>
                <div className={'hidden md:flex gap-2'}>
                    <Button>Создать счет</Button>
                    <Button>Корзина</Button>
                </div>
                <div className={'flex justify-center items-center border border-[#363738] rounded-[18px] px-4 py-1.5 cursor-pointer'} >
                    <Image src="/avatar.png" alt="avatar icon" width={24} height={24}/>
                    <ArrowIcon className={'my-2 mx-[5px]'}/>
                </div>
                <BurgerButton width={24} height={24} className={'m-2 cursor-pointer'}/>
            </div>
        </header>
    )
}