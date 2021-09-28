import React from 'react';
// Styles
import { Wrapper, Content, CalcNameInput, InpPreview } from './SingleCalcForm.styles';
import { useEffect, useState } from 'react';



const CalcName = ({ setCalcName }) => {
    const [state, setState] = useState('')
    
    useEffect(() => {
        setCalcName(state)
    })

    return (
        <CalcNameInput>
            <label><h3>Enter a name:</h3></label>
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
                    options, 
                    tmout = 20}) => {
    const [state, setState] = useState(dfault ? dfault : '')

    useEffect(() => {
        Setter(state)
    }, [Setter, state])

    const optionslist = options.map((val) => (
        <option value={val}>{val}</option>
    ))

    return (
        <label><h3>{ name }</h3>
            <select onChange={e => setState(e.target.value)}>
                {optionslist}
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

const SpinRestriction = ({ setSpinRestriction }) => {
    const [state, setState] = useState('UKS');

    useEffect(() => (
        setSpinRestriction(state)
    ))

    return (
        <label><h3>Spin Restriction</h3>
            <select onChange={e => setState(e.target.value)}>
                <option value='UKS'>UKS</option>
            </select>
        </label>
    );
}

const ResolutionId = ({ setResolutionId }) => {
    const [state, setState] = useState(false);

    useEffect(() => (setResolutionId(state)));

    return (
        <label><h3>RI?</h3>
        <input type="checkbox" onChange={e => setState(!state)} />
        </label>
    );

}

const AltBasisSet = ({ setAltBasisSet, resolutionId }) => {
    const [state, setState] = useState('');
    // const [isActive, setIsActive] = useState(false);

    useEffect(() => (
        setAltBasisSet(state)
    ))

    return (
        <label><h3>Alt. Basis Set</h3>
            <select onChange={e => setState(e.target.value)} disabled={!resolutionId}>
                <option value="def2-SVP">def2-SVP</option>
                <option value="def2-TZVP">def2-TZVP</option>
                </select>
        </label>
    )
}

const SolventModel = ({ setSolventModel }) => {
    const [state, setState] = useState(null);

    useEffect(() => (
        setSolventModel(state)
    ))

    return (
        <label><h3>Solvent Model</h3>
            <select onChange={e => setState(e.target.value)}>
                <option value={null}>None</option>
                <option value='CPCMC'>CPCMC</option>
                <option value='COSMO'>COSMO</option>
                </select>
        </label>
    );
}

const Solvent = ({ setSolvent, solventModel}) => {
    const [state, setState] = useState('');

    useEffect(() => (
        setSolvent(state)
    ))

    return(
        <label><h3>Solvent</h3>
            <select onChange={e => setState(e.target.value)} disabled={solventModel ? false : true}>
                <option value={null}>None</option>
                <option value='CPCMC'>CPCMC</option>
                <option value='COSMO'>COSMO</option>
                </select>
        </label>
    )
}


const SingleCalcForm = () => {
    /**
     * Form for the generation of a single ORCA calculation.
     * This will be adapted to serve other text file creations as needed.
     * The only software that will not be supported begins with a `G` due
     * and you'd wonder why so many people were `drawn` to them
     * with their hostile nature toward use of other software packages,
     * desipte their documentation having a lowering utility rating than
     * your average dumpster contents.
     */
    const [calcType, setCalcType] = useState('');
    const [functional, setFunctional] = useState('');
    const [basisSet, setBasisSet] = useState('');
    const [charge, setCharge] = useState('');
    const [multiplicity, setMultiplicity] = useState('');
    const [calcName, setCalcName] = useState('');
    const [spinRestriction, setSpinRestriction] = useState('');
    const [resolutionId, setResolutionId] = useState(false);
    const [altBasisSet, setAltBasisSet] = useState('');
    // const [calcPreviewStr, setCalcPreviewStr] = useState('');
    // Components to create
    const [solventModel, setSolventModel] = useState('');
    const [solvent, setSolvent] = useState('');

    const calculation = {
        calcType: calcType,
        functional: functional,
        basisSet: basisSet,
    }

    const calcTypes = ['TightOpt', 'NumFreq'];

    return (
        <Wrapper>
            <Content>
                    <CalcName setCalcName={setCalcName}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <CalcType setCalcType={setCalcType} />
                    <SelectField name='Calc Type:' dfault='' Setter={setCalcType} options={calcTypes} tmout={10} />
                    <Functional setFunctional={setFunctional} />
                    <BasisSet setBasisSet={setBasisSet}/>
                    <Charge setCharge={setCharge} />
                    <Multiplicity setMultiplicity={setMultiplicity}/>
                    <SpinRestriction setSpinRestriction={setSpinRestriction} />
                    <ResolutionId setResolutionId={setResolutionId} />
                    <AltBasisSet setAltBasisSet={setAltBasisSet} resolutionId={resolutionId} />
                    <SolventModel setSolventModel={setSolventModel} />
                    <Solvent setSolvent={setSolvent} solventModel={solventModel} />
                    {/* <AdvancedOptions /> */}
            </Content>
            <Content>
        </Content>
        <h3>{calculation.calcType, calculation.basisSet}</h3>

        </Wrapper>

    );
}

export default SingleCalcForm;