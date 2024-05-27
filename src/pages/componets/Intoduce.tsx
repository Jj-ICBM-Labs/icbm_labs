import { postInterface } from "@/interface"

export default function Introduce({posts}: {
    posts: postInterface[]
}) {
    return (
        <div id="introduce" className="bg-[--bg-100] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-[--text-100] sm:text-4xl">연구실 소개</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400 break-keep">
                        ICBM 연구실은 박지수 교수님과 연구원들간의 연구 동아리로 IOT, Cloud, Big Data, Mobile 외 여러 영역에 대한 학습 및 연구를 진행하는 동아리 입니다.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts?.map((post, index) => (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-[--text-200] group-hover:text-[--text-100]">
                                    <p>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </p>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                                <img src={post.img.url} alt={post.title} className="pt-5" />
                                {/* TODO : 이미지 크기 어떻게 처리할지 결정 */}
                                {/* className={"h-" + post.img.heigth + " w-" + post.img.width} */}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}