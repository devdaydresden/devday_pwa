export interface SessionCard {
    sessionId : string;
    favourite : boolean;
    linkToSession : boolean;
    title : string;
    speaker : string;
    type : string;
    isFavourite: boolean;
    location: string;
    timeSlot ?: string;
}
