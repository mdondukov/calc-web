import React from "react";
import {observer} from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useIntl} from "react-intl";

import {MainButton, Instruction} from "../components";
import jamStartSvg from "../assets/img/jamilya_start.svg"
import {useStores} from "../hooks/use-stores";

const Home: React.FC = observer(() => {
    const intl = useIntl()
    const {locale} = useStores().uiStore
    const [intro, setIntro] = React.useState("")
    const [welcome, setWelcome] = React.useState("")

    React.useEffect(() => {
        fetch(`/md/intro-${locale}.md`)
            .then(res => res.text())
            .then((text) => setIntro(text))
            .catch((e) => {
                console.error(e)
            })

        fetch(`/md/welcome-${locale}.md`)
            .then(res => res.text())
            .then((text) => setWelcome(text))
            .catch((e) => {
                console.error(e)
            })
    }, [locale])

    return (
        <div className="lg:grid lg:grid-cols-12">
            <div className="col-span-6">
                <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                    {intl.formatMessage({id: "page.home.name"})}
                </h1>
                <div className="text-lg font-medium text-blue-800 mb-12">
                    <ReactMarkdown children={intro} remarkPlugins={[remarkGfm]}/>
                </div>
                <MainButton path="/poll" name={intl.formatMessage({id: "label.start"})}/>
            </div>
            <div className="col-span-6">
                <div className="flex lg:ml-6">
                    <div className="flex-auto -mr-10">
                        <div className="bg-white rounded-xl px-6 py-8 mb-12 text-center">
                            <ReactMarkdown children={welcome} remarkPlugins={[remarkGfm]}/>
                        </div>
                        <div className="flex justify-center">
                            <Instruction/>
                        </div>
                    </div>
                    <div className="flex-none">
                        <img
                            src={jamStartSvg}
                            alt={intl.formatMessage({id: "label.jamilya"})}
                            className="w-[240px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Home