import { ArrowRightIcon } from '@heroicons/react/24/outline'

const links = [
    { name: 'Home', href: '#' },
    { name: '연구실 소개', href: '#introduce' },
    { name: '연구원', href: '#researchers' },
    { name: '연구 연혁', href: '#researches' },
    { name: '연구실 지원', href: '#apply' },
]

export default function Footer() {
    return (
        <div className="bg-[--bg-100]">
            <div className="mx-auto max-w-7xl py-14 px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-[--text-100] sm:text-4xl">ICBM Labs</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400 break-keep">
                        함께 성장하는 연구실
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 lg:max-w-none lg:grid-cols-5 text-[--text-100] text-center">
                    {
                        links.map((i, index) => {
                            return <a href={i.href} key={index}>{i.name} <span aria-hidden="true">→</span></a>
                        })
                    }
                </div>
                <p className="text-[--text-200] text-center pt-36">&copy; 2024. ICBM Labs all rights reserved.</p>
            </div>
        </div>
    )
}