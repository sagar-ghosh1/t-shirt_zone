import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const RingContext = createContext('gold')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;




/**
 * 1. create context and export
 * const RingContext = createContext('gold')
 * 2. Create a provider and pass a value
 * <RingContext.Provider value='golden Ring'>
 * </RingContext.Provider>
 * 3. use useContext to receive
 * export const RingContext = createContext('gold')
 * সেখানে গিয়ে const angti = useContext(RingContext)
 * তার নিচে  <p><small>Ring: {angti}</small></p>
 * **/