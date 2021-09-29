import React from 'react';
// Styles
import { Wrapper, Content, CalcNameInput, InpPreview } from './SingleCalcForm.styles';
import { useEffect, useState } from 'react';


const SelectField = ({ 
    name,
    Setter,
    options,
    dfault = options[0],
    tmout = 20 }) => {
    const [state, setState] = useState(dfault)

    useEffect(() => {
        Setter(state)
    }, [Setter, state])

    const optionslist = options.map((val) => (
        <option value={val}>{val}</option>
    ))

    return (
        <label><h3>{name}</h3>
            <select onChange={e => setState(e.target.value)}>
                {optionslist}
            </select>
        </label>
    )
};

const CheckBox = ({
    name,
    Setter,
    dfault,
}) => {
    const [state, setState] = useState('')
    
}

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


const Charge = ({ setCharge }) => {
    const [state, setState] = useState(0);

    useEffect(() => (
        setCharge(state)
    ), [setCharge, state])
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

    useEffect(() => (
        setMultiplicity(state)
    ), [setMultiplicity, state])

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

const ResolutionId = ({ setResolutionId }) => {
    const [state, setState] = useState(false);

    useEffect(() => (setResolutionId(state)), [setResolutionId, state]);

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
    ), [setAltBasisSet, state])

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
    ), [setSolventModel, state])

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
    ), [setSolvent, state])

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

    const calcTypeOptions = ['TightOpt', 'Opt', 'NumFreq', 'AnFreq', 'Single Point', 'Mossbauer'];
    const functionalOptions = ['BP86', 'B3LYP']
    const basisSetOptions = ['def2-SVP', 'def2-TZVP', 'def2-QZVP', '6-31', '6-31G', '6-311G']
    const spinRestrictionOptions = ['UKS']


    return (
        <Wrapper>
            <Content>
                    <CalcName setCalcName={setCalcName}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <SelectField name='Spin Restriction' Setter={setSpinRestriction} options={spinRestrictionOptions} tmout={10} />
                    <SelectField name='Calc Type:' Setter={setCalcType} options={calcTypeOptions} tmout={10} />
                    <SelectField name='Functional:'Setter={setFunctional} options={functionalOptions} tmout={10} />
                    <SelectField name='Basis Set:' Setter={setFunctional} options={basisSetOptions} tmout={10} />
                    <Charge setCharge={setCharge} />
                    <Multiplicity setMultiplicity={setMultiplicity}/>
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