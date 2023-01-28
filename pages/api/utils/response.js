import httpStatus from "./httpStatus"

export const responseMessage = (res, code, message) => {
    const status = httpStatus[`${code}`]
    return res.status(code).json({ code, status, message })
}

export const responseData = (res, code, message, data) => {
    const status = httpStatus[`${code}`]
    return res.status(code).json({ code, status, message, data })
}

export const responseError = (res, code, message, error) => {
    const status = httpStatus[`${code}`]
    return res.status(code).json({ code, status, message, error })
}