import React from "react";
import {observer} from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useIntl} from "react-intl";
import {AiOutlineRead} from "react-icons/ai";

import {useStores} from "../hooks/use-stores";
import jamInstSvg from "../assets/img/jamilya_instr.svg";
import {Modal} from "./";

export const Instruction: React.FC = observer(() => {
    const intl = useIntl()
    const {locale} = useStores().uiStore
    const [open, setOpen] = React.useState<boolean>(false)
    const [content, setContent] = React.useState("")

    React.useEffect(() => {
        fetch(`/md/intro-${locale}.md`)
            .then(res => res.text())
            .then((text) => setContent(text))
            .catch((e) => {
                console.error(e)
            })
    }, [locale])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="block flex items-center text-blue-800 hover:opacity-75"
            >
                <div className="flex-none mr-2">
                    <AiOutlineRead size={34}/>
                </div>
                <div className="flex-auto font-bold uppercase align-middle">
                    {intl.formatMessage({id: "label.instruction"})}
                </div>
            </button>
            {
                open && (
                    <Modal setOpen={setOpen}>
                        <div className="lg:grid lg:grid-cols-12">
                            <div className="col-span-8">
                                <h1 className="text-3xl text-lime-500 font-bold uppercase mb-8">
                                    {intl.formatMessage({id: "page.instr.name"})}
                                </h1>
                                <div className="text-lg font-medium text-blue-800 mb-8">
                                    <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}/>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="flex justify-end">
                                    <img
                                        src={jamInstSvg}
                                        alt={intl.formatMessage({id: "label.jamilya"})}
                                        className="w-[212px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </>
    )
})