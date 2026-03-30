import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SuggestionSubmission {
    appIdea: string;
    name: string;
    email: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllContacts(): Promise<Array<ContactSubmission>>;
    getAllSuggestions(): Promise<Array<SuggestionSubmission>>;
    submitContact(name: string, email: string, message: string): Promise<void>;
    submitSuggestion(name: string, email: string, appIdea: string): Promise<void>;
}
