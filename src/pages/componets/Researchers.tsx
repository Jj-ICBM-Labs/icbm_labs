import { UserCircleIcon } from '@heroicons/react/24/outline'
import { resercherInterface } from '../../interface'
import Card from './Card'

export default function Researchers({ reserchersList }: {
    reserchersList: resercherInterface[]
}) {
    return (
        <div id="researchers" className="bg-[--bg-300] py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-[--text-100] sm:text-4xl">ICBM 연구원들</h2>
                    <p className="mt-6 text-lg leading-8 text-[--text-200]">
                        ICBM 연구실을 빛내는 {reserchersList?.length}인의 연구원들입니다.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {reserchersList ? reserchersList.map((person, index) => (
                        <Card key={index} researcher={person} index={index} />
                        // <li key={person.name + "-" + index}>
                        //     <div className="flex items-center gap-x-6">
                        //         {
                        //             person?.imageUrl ?
                        //                 <img data-tooltip-target={person.name + "-" + index} className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                        //                 :
                        //                 <UserCircleIcon className="size-16 text-blue-500" />
                        //         }
                        //         <div>
                        //             <h3 className="text-base font-semibold leading-7 tracking-tight text-[--text-100]">{person.name}</h3>
                        //             <p className="text-sm font-semibold leading-6 text-[--accent-200]">{person.role}</p>
                        //             <p className="text-sm font-semibold leading-6 text-[--text-200]">{person.interasted}</p>
                        //             {/* <p className="text-xs font-semibold leading-6 text-[--text-100]">{person.bio}</p> */}
                        //         </div>
                        //     </div>
                        // </li>
                    )) : <></>}
                </ul>
            </div>
        </div>
    )
}