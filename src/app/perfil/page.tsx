"use client"
import { Header } from "@/components/Header/Header";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
import { useVerifyLogin } from "../../helpers/UseVerifyLogin";

export default function Perfil() {
    useVerifyLogin()
    const { userName } = useContext(UserContext) ?? {};

    return <>
        <Header title="Perfil" userName={userName} />
    </>
}