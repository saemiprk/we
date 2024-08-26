'use client';

type Props = {
    en: string,
    ko: string
}

export default function Title(props: Props){
    return (
        <div className="w-full text-center mb-2">
            <div className="text-xs tracking-[.2em]">{props.en}</div>
            <div className="text-2xl font-bold">{props.ko}</div>
        </div>
    )
}