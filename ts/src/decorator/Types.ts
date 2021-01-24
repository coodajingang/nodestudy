
export type SpiderConfig = {
    name: string,
    type?: SpiderType,
    path?: string,
    constr?: any
}

export enum SpiderType {
    ONCE,
    CRON
}

export enum SpiderStatus {
    READY,
    RUNNING,
    STOPED,
    PAUSE,
    RESUME,
    ERROR
}