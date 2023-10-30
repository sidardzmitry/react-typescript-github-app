export type UserGithub = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company?: string | null,
    blog: string | null,
    twitter_username?: string | null,
    bio: string,
    location: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
}

export type ErrorGithub = {
    message: string,
    documentation_url: string
}

export type UserLocalGithub = {
    login: string,
    avatar: string,
    name: string,
    blog?: string | null,
    company?: string | null,
    twitter?: string | null,
    bio: string,
    location: string,
    repos: number,
    followers: number,
    following: number,
    created: string
}