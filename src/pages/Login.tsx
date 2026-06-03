

import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../components/ButtonLanguage";

const Login = () => {
    const { t } = useTranslation();
    const { login } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await toast.promise(
            new Promise((resolve) => {
                setTimeout(() => {
                    const userData = {
                        name: username,
                        email,
                        password,
                    };

                    login(userData);
                    resolve(true);
                }, 1000);
            }),
            {
                pending: "Verificando seus dados...",
                success: "Seja bem-vindo 👌",
                error: "Erro ao fazer login 🤯",
            }
        );

        navigate("/home");
    }

    return (


        <div className="flex flex-col items-center justify-center w-full md:w-full lg:w-full h-screen bg-gray-700">
            <div className="flex flex-col gap-7 items-center justify-center w-100 h-110 rounded-2xl bg-amber-500">
                <ButtonLanguage className="absolute top-5 right-5"/>
                <h1 className="text-amber-50 text-2xl font-bold">{t("Olá, seja bem vindo")}</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5 w-full text-amber-50">
                        <label className="text-amber-50">{t("Nome de usuário")}</label>
                        <input value={username}
                            onChange={(e) => setUsername(e.target.value)} className="w-full h-10 rounded-lg p-3 outline-0 text-amber-600 bg-amber-50 placeholder:text-amber-300 placeholder:text-[13px]" type="name" placeholder={t("Digite seu nome completo")} />
                    </div>



                    <div className="flex flex-col gap-0.5 w-full text-amber-50">
                        <label className="text-amber-50" >Email</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} className="w-full h-10 rounded-lg p-3 outline-0
                            text-amber-600 bg-amber-50 placeholder:text-amber-300 placeholder:text-[13px]" type="email" placeholder={t("Digite seu email")} />
                    </div>

                    <div className="flex flex-col gap-0.5 w-full text-amber-50">
                        <label className="text-amber-50" >{t("Senha")}</label>
                        <input value={password}
                            onChange={(e) => setPassword(e.target.value)} className="w-full h-10 rounded-lg p-3 outline-0 text-amber-600 bg-amber-50 placeholder:text-amber-300 placeholder:text-[13px]" type="password" placeholder={t("Digite sua senha")} />
                    </div>


                    <button className="bg-amber-50 rounded-lg w-full h-10 text-amber-500 hover:bg-amber-800 hover:text-amber-50" type="submit"> {t("LOGAR")} </button>

                </form>

            </div>
        </div>
    )
}



export default Login