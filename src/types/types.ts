export interface ICommandLine {
    command: string
    setCommand: (command: string) => void
}


export enum ECommand {
    ABOUT = "about",
    SKILLS = "skills",
    PROJECTS = "projects",
    CONTACTS = "contacts",

    HOME = "home",

}
