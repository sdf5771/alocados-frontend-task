import React from 'react';

function useCoinData(){
    const getCoinData = () => {
        let coinData = localStorage.getItem("myCoin")

        return coinData
    }

    const setCoinData = (data:string): boolean => {
        try {
            localStorage.setItem("myCoin", data);

            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    return [getCoinData, setCoinData]
}

export default useCoinData;