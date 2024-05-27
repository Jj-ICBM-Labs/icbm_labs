import { resercherInterface } from "@/interface";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useEffect, useState } from "react";

export default function Card(
    {
        researcher, index
    }: {
        researcher: resercherInterface,
        index: number
    }) {
    const [cardFace, setCardFace] = useState(false);
    const card = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardFace) {
            card.current!.style.transform = "perspective(800px) rotateY(180deg)"
        } else {
            card.current!.style.transform = "perspective(800px) rotateY(0deg)"
        }
    }, [cardFace]);

    return (
        <div ref={card} onClick={() => setCardFace(!cardFace)} className="relative w-96 h-52 cursor-pointer transition-all gap-x-6" style={{
            transform: "perspective(800px) rotateY(0deg)",
            transformStyle: "preserve-3d",
        }}>
            <div className="w-96 h-52 bg-white rounded-lg flex absolute" style={{
                backfaceVisibility: "hidden"
            }}>
                <svg className="rounded-l-lg min-w-[200px]" width="200" height="208" viewBox="0 0 200 208">
                    <path d="M 200 0 V 0 L 160 210 H 0 V 0 Z Z" fill="var(--primary-100)" />
                    <g className="rounded-lg" transform="translate(20,74)">
                        <rect x="10" y="5" width="40" height="40" rx="5" fill="#FFF738" />
                        <path d="M 57 0 L 0 0 L 0 48 L 57 48 L 57 48 Z M 38 28 L 38 20 L 47.5 20 L 47.5 28 L 38 28 Z M 38 40 L 38 32 L 47.5 32 L 47.5 36 C 47.5 38.2125 45.3773 40 42.75 40 L 38 40 Z M 19 32 L 19 40 L 14.25 40 C 11.6227 40 9.5 38.2125 9.5 36 L 9.5 32 L 19 32 Z M 19 20 L 19 28 L 9.5 28 L 9.5 20 L 19 20 Z M 19 8 L 19 16 L 9.5 16 L 9.5 12 C 9.5 9.7875 11.6227 8 14.25 8 L 19 8 Z M 33.25 8 L 33.25 40 L 23.75 40 L 23.75 8 L 33.25 8 Z M 42.75 8 C 45.3773 8 47.5 9.7875 47.5 12 L 47.5 16 L 38 16 L 38 8 L 42.75 8 Z" fill="black" />
                    </g>
                    <text
                        x="20" y="30" fill="white" font-size="20" fontFamily="'Leckerli One', cursive">
                        ICBM Labs
                    </text>
                    <image href="/logo-no-background.png" width={40} height={40} x={30} y={160} />
                </svg>
                <div className="h-full w-full flex">
                    <div className="h-full w-[100px] flex flex-col justify-center break-keep">
                        <p>{researcher.name}</p>
                        <p className="text-xs">{researcher.role}</p>
                        <p className="text-xs mt-3">{researcher.interasted}</p>
                    </div>
                    <div className="h-full w-full/2 flex justify-center items-center">
                        {
                            researcher?.imageUrl ?
                                <img data-tooltip-target={researcher.name + "-" + index} className="h-16 w-16 rounded-full" src={researcher.imageUrl} alt="" />
                                :
                                <UserCircleIcon className="size-16 text-blue-500 mx-auto" />
                        }
                    </div>
                </div>
            </div>
            <div className="w-96 h-52 bg-white rounded-lg flex flex-col items-center absolute" style={{
                backfaceVisibility: "hidden",
                transform: "perspective(800px) rotateY(180deg)"
            }}>
                <div className="w-full h-[40px] bg-black mt-5"></div>
                <div className="w-72 h-28 m-2 p-5 bg-[--bg-300] rounded-sm flex justify-center items-center">
                    <p className="text-[--text-100]">{researcher.bio ?? "메모가 없습니다."}</p>
                </div>
            </div>
        </div>
    )
}