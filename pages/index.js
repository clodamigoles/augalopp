import Head from "next/head"

import { getWord } from "@/utils/dictionnary"

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <h1>
                {getWord('hello')}
            </h1>
        </>
    )
}