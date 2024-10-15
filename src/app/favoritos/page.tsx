"use client"
import { Header } from "@/components/Header/Header";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
import { useVerifyLogin } from "../../helpers/UseVerifyLogin";

export default function Favoritos() {
    useVerifyLogin()

    const { userName } = useContext(UserContext) ?? {};

    return <>
        <Header title="Favoritos" userName={userName} />
    </>
}