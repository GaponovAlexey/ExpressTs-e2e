import { Request } from "express"

export type RequestWithBody<T> = Request<{}, {}, T>
export type RequestWithQuery<T> = Request<{}, {}, {}, T>
export type RequestWithParam<T> = Request<T>
export type RequestWithParamsAndBody<T, B> = Request<T,{}, B>

export type cursesType = {
  id: number
  title: string
}