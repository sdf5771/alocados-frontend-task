import { atom } from "recoil";
import { DATA_ETH, DATA_SOL, DATA_BNB } from "constant";

export default atom({
    key: "Wallet",
    default: {
        ETH: {
            type: DATA_ETH.type,
            name: DATA_ETH.name,
            initialCapital: 2000,
        },
        SOL: {
            type: DATA_SOL.type,
            name: DATA_SOL.name,
            initialCapital: 0,
        },
        BNB: {
            type: DATA_BNB.type,
            name: DATA_BNB.name,
            initialCapital: 0,
        }
    }
})