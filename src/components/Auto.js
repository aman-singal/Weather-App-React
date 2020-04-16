import React, { useState } from 'react' 
import {Autocomplete} from 'react-autocomplete'


function Auto() {

    const [value,setValue] = useState('')
    const [select, setSelect] = useState('')


    return (
        <div>
            {/* <Autocomplete
            getItemValue={(item) => item.label}
            items={[
                { label: 'apple' },
                { label: 'banana' },
                { label: 'pear' }
            ]}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
                </div>
            }
            value={value}
            onChange={(e) =>  setValue(e.target.value)}
            onSelect={(val) => setSelect(val)}
            /> */}
        </div>
    )
}

export default Auto
