"use client"

import { ReactNode, useState } from "react"


export default function Overflow({ children, inter }: { children: ReactNode, inter: { variable: string } }) {
    //  ${inter.variable}
    const navbarOpen = false
    return (
        <body className="font-sans" style={{
            "overflowY": navbarOpen ? "hidden" : "scroll"
        }}>
            {children}
        </body>
    )
}