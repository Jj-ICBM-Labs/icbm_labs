import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { researchesInterface } from '../../interface'

export default function Researches({ researchesList }:
    { researchesList: researchesInterface[] }
) {
    return (
        <div id="researches" className="bg-[--bg-100] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-[--text-100] sm:text-4xl">연구실 연혁</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400 break-keep">
                        ICBM에서 진행해온 연구들 입니다.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl">
                    <ol className="overflow-hidden space-y-8">
                        {
                            researchesList ? researchesList.map((researche, index) => {
                                return <li key={index} className={index == researchesList.length - 1 ? "relative flex-1 " : "relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5"}>
                                    <div className="flex items-center font-medium w-full">
                                        <span className="w-8 h-8 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                            <CheckBadgeIcon className='size-16 text-white' />
                                        </span>
                                        <div>
                                            <h4 className="text-lg text-indigo-600">{researche.researchTitle}</h4>
                                            <p className="text-sm text-[--text-200]">{researche.date}</p>
                                        </div>
                                    </div>
                                </li>
                            }) : <></>
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}