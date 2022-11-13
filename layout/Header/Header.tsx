import  { HeaderProps } from "./Header.props";
import Logo from '../Logo.svg';
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import {motion} from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import {useEffect, useState} from "react";
import styles from './Header.module.css'
import {useRouter} from "next/router";


export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router])

const variants = {
    opened: {
        opacity: 1,
        x: 0,
        transition: {
            stiffness: 20
        }
    },
    closed: {
        opacity: 0,
        x: '100%',
    }
};


    return (
       <header className={styles.header} {...props}>
           <Logo />
           <ButtonIcon icon='menu' appearance='white' onClick={() => setIsOpened(true)} />
           <motion.div
               className={styles.mobileMenu}
               variants={variants}
               initial={'closed'}
               animate={isOpened ? 'opened' : 'closed'}
           >
               <Sidebar/>
               <ButtonIcon className={styles.menuClose} icon='clos' appearance='white'  onClick={() => setIsOpened(false)} />
           </motion.div>
       </header>
    );
};