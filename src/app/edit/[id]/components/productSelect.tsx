import { getProducts } from "@/app/actions/products";
import Icon from "@/app/components/common/icon";
import { ChangeEvent, MouseEvent, useRef } from "react";

import { useCallback, useEffect, useState, useTransition } from "react";


type Props = {
    value: number,
    disabled?: boolean,
    error?: boolean,
    errorStr?: string,
    onChange: (value: number | null) => void,
    onBlur?: () => void,
    onFocus?: () => void,
}

type Product = {
    id: number;
    name: string;
    category: "apps" | "games";
}

const ProductSelect = ({ value, disabled, error, errorStr, onChange, onBlur, onFocus }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [expanded, setIsExpanded] = useState(false);
    const [gamesExpanded, setIsGamesExpanded] = useState(false);
    const [appsExpanded, setIsAppsExpanded] = useState(false);

    const [products, setProducts] = useState<Product[]>([]);
    const [, startTransition] = useTransition();
    const [searchStr, setSearchStr] = useState('');

    const valueText = products.find(el => el.id === value)?.name || "";

    useEffect(() => {
        startTransition(async () => {
            const products = await getProducts()
            setProducts(products);
        })
    }, [])


    useEffect(() => {

        const onclick = (e: globalThis.MouseEvent) => {
            if (containerRef.current === null)
                return
            if (!containerRef.current.contains(e.target as Node)) {
                setIsExpanded(false)
                if (onBlur)
                    onBlur()
            }
        }

        document.addEventListener('click', onclick);

        return () => {
            document.removeEventListener('click', onclick);
        }

    }, [containerRef, onBlur, setIsExpanded]) // close  on click outside



    const games = products.filter(el => el.category === "games" && el.name.toLowerCase().includes(searchStr.toLowerCase()));
    const apps = products.filter(el => el.category === "apps" && el.name.toLowerCase().includes(searchStr.toLowerCase()));


    const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchStr(e.target.value);
        setIsGamesExpanded(true);
        setIsAppsExpanded(true);
    }

    const onSelect = useCallback((id: number) => () => {
        onChange(id);
        setIsExpanded(false)
        setSearchStr('');
    }, [onChange, setIsExpanded]);

    const focus = () => {
        setIsExpanded(true)
        if (onFocus)
            onFocus();
    }

    const clear = () => {
        onChange(null);
        setSearchStr('');
    }

    const onGamesClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsGamesExpanded(value => !value);
    }

    const onAppsClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAppsExpanded(value => !value);
    }


    return (
        <div ref={containerRef} className="relative">
            <div className="flex flex-col gap-1">
                <div className={`flex items-center justify-between ${disabled ? "bg-slate-100" : "bg-white"} ${error ? "border-red-500" : "border-slate-300"} border rounded-full px-6 py-3`}>
                    <input disabled={disabled} value={expanded ? searchStr : valueText} onChange={onInputChanged} onFocus={focus} className="w-full placeholder:text-slate-500 text-slate-900 outline-none" />
                    {!expanded && valueText ? (
                        <button disabled={disabled} onClick={clear} >
                            <Icon className="w-4 h-4 text-slate-300" icon="close-circle" />
                        </button>
                    ) : null}
                </div>
                {errorStr
                    ? <div className="flex gap-1 items-center pl-2">
                        <span className="text-sm text-red-600">{errorStr}</span>
                    </div>
                    : null
                }
            </div>

            {expanded
                ? (
                    <div className="absolute w-full z-20 left-0 top-[58px] px-3 py-4 flex flex-col gap-2 bg-white border border-slate-300 shadow-md rounded-2xl text-base text-slate-900">
                        <div className={`rounded-xl`}>
                            <div onClickCapture={onGamesClick} className="flex justify-between items-center px-3 py-2 rounded-xl cursor-pointer hover:bg-slate-100">
                                <span>Games</span>
                                <Icon className="w-4 h-4 text-slate-300" icon={gamesExpanded ? "arrow-circle-down" : "arrow-circle-right"} />
                            </div>

                            {gamesExpanded ? (
                                games.map(el => (
                                    <div key={el.id} onClick={onSelect(el.id)} className={`${el.id === value ? "font-bold" : ""} flex justify-between items-center px-3 ml-3 py-2 cursor-pointer rounded-xl hover:bg-slate-100`}>
                                        <span>{el.name}</span>
                                    </div>
                                ))
                            )
                                : null
                            }
                        </div>


                        <div className={`rounded-xl`}>
                            <div onClickCapture={onAppsClick} className="flex justify-between items-center px-3 py-2 rounded-xl cursor-pointer hover:bg-slate-100">
                                <span>Apps</span>
                                <Icon className="w-4 h-4 text-slate-300" icon={appsExpanded ? "arrow-circle-down" : "arrow-circle-right"} />
                            </div>

                            {appsExpanded ? (
                                apps.map(el => (
                                    <div key={el.id} onClick={onSelect(el.id)} className={`${el.id === value ? "font-bold" : ""} flex justify-between items-center px-3 ml-3 py-2 cursor-pointer rounded-xl hover:bg-slate-100`}>
                                        <span>{el.name}</span>
                                    </div>
                                ))
                            )
                                : null
                            }
                        </div>


                    </div>
                )
                : null
            }

        </div>
    )
}

export default ProductSelect;