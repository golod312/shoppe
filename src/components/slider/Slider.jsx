import React, { useEffect, useState } from 'react'
import style from './Style.module.css'
import Form from 'react-bootstrap/Form'


function PriceSlader() {
    const [valueMin, setValueMin] = useState(25)
    const [valueMax, setValueMax] = useState(75)
    const [progres, setProgres] = useState({ 'left': 25, 'right': 25 })
    const min = 0
    const max = 100
    const priceGap = 10

    const handleChangeMin = (e) => {
        console.log(e.target.className)
        setValueMin(e.target.value)
        setProgres(progres => ({
            ...progres,
            ...progres.left = parseInt((valueMin) / max * 100)
        }))
    }
    const handleChangeMax = (e) => {
        console.log(e.target.className)
        setValueMax(e.target.value)
        setProgres(progres => ({
            ...progres,
            ...progres.right = 100 - parseInt((valueMax) / max * 100)
        }))
    }



    console.log('MaxMin', valueMin, valueMax);
    console.log('Progres', progres.left, progres.right);



    return (
        <>
            <div className={style.wrapper}>
                <div className={style.price_input}>
                    <div className={style.field}>

                        <Form.Control
                            className='price_min'
                            type="number"
                            value={valueMin}
                            onChange={(e) => handleChangeMin(e)}
                            style={{ border: '1px solid black' }}
                            step={1} />
                    </div>
                    <div className={style.separator}>-</div>
                    <div className={style.field}>
                        <Form.Control
                            className='price_max'
                            type="number"
                            value={valueMax}
                            onChange={(e) => handleChangeMax(e)}
                            style={{ border: '1px solid black' }}
                            step={1} />
                    </div>
                </div>
                <div className={style.slider}>
                    <div className={style.progres} style={{ left: `${progres.left}%`, right: `${progres.right}%` }}></div>
                </div>
                <div className={style.range_input}>
                    <div className={style.field}>
                        <input
                            className='progres_min'
                            type="range"
                            min={min}
                            max={max}
                            defaultValue={25}
                            style={{ border: 'none', boxShadow: 'none' }}
                            onChange={(e) => handleChangeMin(e)}

                        />
                        <input
                            className='progres_max'
                            type="range"
                            min={min}
                            max={max}
                            defaultValue={75}
                            style={{ border: 'none', boxShadow: 'none' }}
                            onChange={(e) => handleChangeMax(e)}

                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceSlader