import {atom} from 'recoil'
import {TcoinData} from 'types/coinData'

export type TExchangeResult = {
    id: number,
    from: TcoinData,
    to: TcoinData,
    changeDate: Date,
}

export default atom<TExchangeResult[]>({
    key: "ExchangeResult",
    default: [],
})