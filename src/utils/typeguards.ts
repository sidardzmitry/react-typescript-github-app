import { UserGithub } from './../types/user';



export const isGitHubUser = (user: any): user is UserGithub => 'id' in user;