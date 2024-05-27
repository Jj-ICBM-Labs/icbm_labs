export type resercherInterface = {
    name: string,
    role: string,
    interasted?: string,
    bio?: string,
    imageUrl?: string
}

export type researchesInterface = {
    researchTitle: string,
    date: string,
}

export type postInterface = {
    title: string,
    description: string,
    img: {
        url: string,
    }
}