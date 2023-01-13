import React from "react";
import {IntlProvider} from "react-intl";

import {useStores} from "../hooks/use-stores";
import {DEFAULT_LOCALE} from "../store/UIStore";

interface LocaleProviderProps {
    children: React.ReactNode
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({children}) => {
    const {locale} = useStores().uiStore
    const {messages} = useStores().messageStore

    return (
        <IntlProvider
            key={locale}
            locale={locale}
            defaultLocale={DEFAULT_LOCALE}
            messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    )
}