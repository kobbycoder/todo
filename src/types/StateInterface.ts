import { ErrorInterface } from "./ErrorInterface"
export interface StateInterface {
    isLoading: boolean
    isSuccessful: boolean
    error: ErrorInterface
}