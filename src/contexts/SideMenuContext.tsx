import { createContext, useState } from "react";


export type SideMenuContextProviderProps = {
    children:React.ReactNode
}

export type SideMenuContextProps = {
    isOpen:Boolean
    setIsOpen:Function
}

export const SideMenuContext = createContext<SideMenuContextProps | undefined>(undefined)

export default function SideMenuContextProvider (props:SideMenuContextProviderProps){

    const [isOpen,setIsOpen] = useState<Boolean>(false)

    return (
        <SideMenuContext.Provider value={{isOpen,setIsOpen}}>
            {props.children}
        </SideMenuContext.Provider>
    )

}