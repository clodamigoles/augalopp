import { useRouter } from "next/router"

import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import nl from '@/locales/nl.json'

const locales = {
    fr,
    en,
    de,
    nl
}

export function getWord(code) {
    const router = useRouter()
    const { locale } = router

    const t = locales[locale] || fr

    return t[code] || code
}

export function translate(code, locale = 'fr') {
    const t = locales[locale] || fr
    return t[code] || code
}