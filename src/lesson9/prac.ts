export {};

const Status = {
    Success: 'success', Error: 'error', Loading: 'loading',
} as const

type Status = (typeof Status)[keyof typeof Status]

interface SuccessResponse {
    status: 'success';
    data: unknown;
}

interface ErrorResponse {
    status: 'error';
    message: string;
    code: number;
}

type ApiResponse = SuccessResponse | ErrorResponse

function isSuccessResponse(res: ApiResponse): res is SuccessResponse {
    switch(res.status) {
        case Status.Success:
            return true
        default:
            return false
    }
}

function isErrorResponse(res: ApiResponse): res is ErrorResponse {
    switch(res.status) {
        case Status.Error:
            return true
        default:
            return false
    }
}

function parseResponse(res: SuccessResponse): unknown
function parseResponse(res: ErrorResponse): string

function parseResponse(res: SuccessResponse | ErrorResponse): unknown | string {
    if (isErrorResponse(res)) {
        return res.message
    }
    return res.data
}

const success: ApiResponse = { status: 'success', data: {id: 1, name: 'Ivan'}}
const error: ApiResponse = {status: 'error', message: 'Not found', code: 404}

if (isSuccessResponse(success)) {
    console.log('성공 데이터:', success.data)
}

if (isErrorResponse(error)) {
    console.log(`에러 [${error.code}]: ${error.message}`)
}

console.log(parseResponse(success))
console.log(parseResponse(error))
