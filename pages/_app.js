import { useEffect } from 'react'
import { useRouter } from 'next/router'

import "@/styles/Tailwind.css"
import "@/styles/Global.css"

const SUPPORTED_LANGUAGES = ['fr', 'en', 'de', 'nl']

export default function App({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        const lang = SUPPORTED_LANGUAGES.find(l => userLang.startsWith(l)) || 'fr'
        
        const currentLocale = router.locale || router.query.lang;
    
        if (!currentLocale && router.locale !== lang) {
            router.replace(router.pathname, router.asPath, { locale: lang });
        }
    }, [router])

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}