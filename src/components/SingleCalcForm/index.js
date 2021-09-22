import React from 'react';
// Styles
import { Wrapper, Content, CalcNameInput } from './SingleCalcForm.styles';
import { useEffect, useState } from 'react';

const CalcName = ({ setCalcName }) => {
    const [state, setState] = useState('')
    
    useEffect(() => {
        setCalcName(state)
    })

    return (
        <CalcNameInput>
    <input
        type='text'
        placeholder='Calc Name...'
        onChange={e => setState(e.target.value)}
    ></input>
    </CalcNameInput>
);
};

const SelectField = ({ name, 
                    dfault, 
                    Setter, 
                    tmout = 20}) => {
    const [state, setState] = useState(dfault ? dfault : '')

    useEffect(() => {
        const timer = setTimeout(() => {
            Setter(state);
        }, tmout)
        return () => clearTimeout(timer);
    }, [Setter, state])

    return (
        <label><h3>{ name }</h3>
            <select name={name} onChange={e => setState(e.target.value)}>
                {/* For loop over the option mapper or another function to construct
                that object. */}
            </select>
        </label>
    )
};




const CalcType = ({ setCalcType }) => {
    // Set the ORCA Calculation type
    const [state, setState] = useState('TightOpt');

    useEffect(() => {
        const timer = setTimeout(() => {
            setCalcType(state);
        }, 10)

        return () => clearTimeout(timer);
    }, [setCalcType, state])

    return (
        <label><h3>Calc Type:{' '}</h3>
            <select name="calcType" onChange={event => setState(event.target.value)}>
                <option value="TightOpt">TightOpt</option>
                <option value="Opt">Opt</option>
                <option value="NumFreq">NumFreq</option>
                <option value="Single Point">Single Point</option>
                <option value="Mossbauer">Mossbauer</option> // TIL there's a js component named Mossbauer, who woulda guessed.
            </select>
        </label>
    );
}

const Functional = ({ setFunctional }) => {
    const [state, setState] = useState('BP86')

    useEffect(() => {
        setFunctional(state)
    })

    return (
    <label><h3>Functional:{' '}</h3>
    <select name="functionalSelect" onChange={e => setState(e.target.value)}>
        <option value="BP86">BP86</option>
        <option value="B3LYP">B3LYP</option>
        <option value="TPSSh">TPSSh</option>
    </select>
    </label>
);
}

const BasisSet = ({ setBasisSet }) => {
    const [state, setState] = useState('def2-SVP')

    useEffect(() => {
        setBasisSet(state)
    })

    return (
    <label><h3>Basis Set: </h3>
    <select name="basisSetSelectInp" onChange={e => setState(e.target.value)}>
        <option value="def2-SVP">def2-SVP</option>
            <option value="def2-TZVP">def2-TZVP</option>
            <option value="def2-QZVP">def2-QZVP</option>
            <option value="6-31">6-31</option>
            <option value="6-311">6-311</option>
        </select>
    </label>
);
};

const Charge = ({ setCharge }) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        setCharge(state)
    })
    return (
    <label><h3>Charge:{' '}</h3>
    <input 
    type="text" 
    name="charge"
    placeholder="0" 
    onChange={e => setState(e.target.value)}
    ></input>
    {' '}
    </label>
);
}

const Multiplicity = ({ setMultiplicity }) => {
    const [state, setState] = useState(1);

    useEffect(() => {
        setMultiplicity(state)
    })

    return (
    <label><h3>Multiplicity:{' '}</h3>
        <input type="text" 
        name="multiplicity" 
        placeholder="1"
        onChange={e => setState(e.target.value)}
        ></input>
    </label>
);
};

// const AdvancedOptionsButton = () => (
//     <AdvOptionsButtonWrapper>
//     <button type='button'>Adv. Options</button>
//     </AdvOptionsButtonWrapper>
// );



const SingleCalcForm = () => {
    const [calcType, setCalcType] = useState('');
    const [functional, setFunctional] = useState('');
    const [basisSet, setBasisSet] = useState('');
    const [charge, setCharge] = useState('');
    const [multiplicity, setMultiplicity] = useState('');
    const [calcName, setCalcName] = useState('');

    return (
        <Wrapper>
            <Content>
                    <CalcName setCalcName={setCalcName}/>
                    <CalcType setCalcType={setCalcType} />
                    <Functional setFunctional={setFunctional} />
                    <BasisSet setBasisSet={setBasisSet}/>
                    <Charge setCharge={setCharge} />
                    <Multiplicity setMultiplicity={setMultiplicity}/>
                    {/* <AdvancedOptions /> */}
            </Content>
            <Content>
                <h1>Calc name: {calcName} </h1>
                <h1>Calc type: {calcType} </h1>
                <h1>Functional: {functional} </h1>
                <h1>Basis Set: {basisSet}</h1>
                <h1>Charge: {charge}</h1>
                <h1>Multiplicity: {multiplicity}</h1>
            </Content>
        </Wrapper>
        
    );
}

export default SingleCalcForm;