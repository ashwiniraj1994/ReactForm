import React from 'react';
import './css/formstepper1.css';
import Header from './header/header';
import Footer from './footer/footer';

export default class FormStepper4 extends React.Component {
    state = {
        applicantNRE: '',
        coapplicantNRE: '',
        applicantNRO: '',
        coapplicantNRO:'',
        applicantNRSR: '',
        coapplicantNRSR: '',
        applicantImmovable: '',
        coapplicantImmovable: '',
        applicantAssets: '',
        coapplicantAssets: '',
        employerSource: '',
        employerOutstanding: '',
        employerMontly: '',
        bankSource: '',
        bankOutstanding: '',
        bankMontly: '',
        otherSource: '',
        otherOutstanding: '',
        otherMontly: '',
        coEmployerSource: '',
        coEmployerOutstanding: '',
        coEmployerMontly: '',
        coBankSource: '',
        coBankOutstanding: '',
        coBankMontly: '',
        coOtherSource: '',
        coOtherOutstanding: '',
        coOtherMontly: '',
        nameOne: '',
        bankOne: '',
        branchOne: '',
        accountOne: '',
        nameTwo: '',
        bankTwo: '',
        branchTwo: '',
        accountTwo: '',
        nameThree: '',
        bankThree: '',
        branchThree: '',
        accountThree: '',
        unitName: '',
        streetNameUnit: '',
        landmarkUnit: '',
        pinCode: '',
        cityUnit: '',
        stateUnit: '',
        countryUnit: '',
        land: '',
        area: '',
        costLand: '',
        costConstruction: '',
        stageConstruction: '',
        typeOne: '',
        typeTwo: '',
        typeThree: ''
    };

    change = e =>  {
        this.setState ({
            [e.target.name]: e.target.value
        });
    };

    handleTypeOne = e => {
        this.setState ({
            typeOne: e.target.value
        });
    };

    handleTypeTwo = e => {
        this.setState ({
            typeTwo: e.target.value
        });
    };

    handleTypeThree = e => {
        this.setState ({
            typeThree: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    };

    render() {
        return(
            <div>
                <Header/>

                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <a className="waves-effect waves-light btn">Login</a>
                    </li>
                </ul>
                <div className="container">

                    <h6>
                        <b>INDIVIDUAL LOAN APPLICATION FORM FOR NON-RESIDENT INDIANS / PERSONS OF INDIAN ORIGIN</b>
                    </h6>

                    <p>It only takes few minutes to fill up required details.</p>

                    <div className="row">
                        <div className="col s12 xl12 nopadding">
                            <div className="card get-float">

                                <div className="card-content get-float">
                                    <div className="get-float">
                                        <div className="col s12 xl12">
                                            <h6 className="mt0 borbtm">
                                                <b>Home Loan Application</b>
                                            </h6>
                                        </div>


                                        <div className="bs-wizard get-float stepstyle">

                                            <div className="col s3 xl3 nopadding bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Step 1</div>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                    </div>
                                                </div>
                                                <a href="" className="bs-wizard-dot">
                                                </a>
                                                <div className="bs-wizard-info text-center">Personal Information</div>
                                            </div>

                                            <div className="col s3 xl3 nopadding bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Step 2</div>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                    </div>
                                                </div>
                                                <a href="" className="bs-wizard-dot">
                                                </a>
                                                <div className="bs-wizard-info text-center">Co-applicant Information
                                                    <br/>(optional)</div>
                                            </div>

                                            <div className="col s3 xl3 nopadding bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Step 3</div>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                    </div>
                                                </div>
                                                <a href="" className="bs-wizard-dot">
                                                </a>
                                                <div className="bs-wizard-info text-center">Loan Details</div>
                                            </div>

                                            <div className="col s3 xl3 nopadding bs-wizard-step active">
                                                <div className="text-center bs-wizard-stepnum">Step 4</div>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                    </div>
                                                </div>
                                                <a href="" className="bs-wizard-dot">
                                                </a>
                                                <div className="bs-wizard-info text-center">Financial Details</div>
                                            </div>
                                        </div>



                                        <div>


                                            <div className="col s12 m6 mb1rem">
                                                <p className="mb1rem semibold bluetitle">Savings, Investments, etc.</p>

                                                <div className="xscroll">
                                                    <table className="pricetable1">

                                                        <tbody>
                                                        <tr>
                                                            <td className="vtop semibold">Particular Savings in Bank.</td>
                                                            <td className="vtop semibold text-center">Applicant ($)</td>
                                                            <td className="vtop semibold text-center">
                                                                Co-applicant ($)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>NR(E).</td>
                                                            <td>
                                                                <input id="emi" name="applicantNRE" type="number" placeholder="$" className="validate" value={this.state.applicantNRE} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coapplicantNRE" type="number" placeholder="$" className="validate" value={this.state.coapplicantNRE} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>NR(O).</td>
                                                            <td className="pr10">
                                                                <input id="emi" name="applicantNRO" type="number" placeholder="$" className="validate" value={this.state.applicantNRO} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td className="pr10">
                                                                <input id="emi" name="coapplicantNRO" type="number" placeholder="$" className="validate" value={this.state.coapplicantNRO} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>NRSR</td>
                                                            <td>
                                                                <input id="emi" name="applicantNRSR" type="number" placeholder="$" className="validate" value={this.state.applicantNRSR} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coapplicantNRSR" type="number" placeholder="$" className="validate" value={this.state.coapplicantNRSR} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Immovable Property (specify)
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="applicantImmovable" type="number" placeholder="$" className="validate" value={this.state.applicantImmovablee} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coapplicantImmovable" type="number" placeholder="$" className="validate" value={this.state.coapplicantImmovable} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>Other Assets (specify)
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="applicantAssets" type="number" placeholder="$" className="validate" value={this.state.applicantAssets} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coapplicantAssets" type="number" placeholder="$" className="validate" value={this.state.coapplicantAssets} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                            <div className="col s12 m6">
                                                <p className="mb1rem semibold bluetitle">Loans Taken/Proposed</p>
                                                <p className="text-danger mb1rem fs12">Important: Non disclosure / false declaration can lead to cancellation of your loan application.</p>

                                                <div className="xscroll">
                                                    <table className="pricetable1">


                                                        <tbody>
                                                        <tr>
                                                            <td className="vtop semibold">Source/Purpose of Loan</td>
                                                            <td className="vtop semibold text-center">Outstanding Amount($)</td>
                                                            <td className="vtop semibold text-center">
                                                                Monthly Instalment Payable($)
                                                            </td>
                                                            <td className="vtop semibold text-center">Term (Months)</td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p className="mt1rem semibold">Applicant:</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Employer</td>
                                                            <td>
                                                                <input id="emi" name="employerSource" type="number" placeholder="$" className="validate" value={this.state.employerSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="employerOutstanding" type="number" placeholder="$" className="validate" value={this.state.employerOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name={"employerMontly"} type="number" placeholder="months" className="validate" value={this.state.employerMonthly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank</td>
                                                            <td>
                                                                <input id="emi" name="bankSource" type="number" placeholder="$" className="validate" value={this.state.bankSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="bankOutstanding" type="number" placeholder="$" className="validate" value={this.state.bankOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="bankMontly" type="number" placeholder="months" className="validate" value={this.state.bankMontly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Others</td>
                                                            <td>
                                                                <input id="emi" name="" type="number" placeholder="$" className="validate" value={this.state.otherSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="" type="number" placeholder="$" className="validate" value={this.state.otherOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="" type="number" placeholder="months" className="validate" value={this.state.otherMontly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p className="mt1rem semibold">Co-applicant:</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Employer</td>
                                                            <td>
                                                                <input id="emi" name="coEmployerSource" type="number" placeholder="$" className="validate" value={this.state.coEmployerSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coEmployerOutstanding" type="number" placeholder="$" className="validate" value={this.state.coEmployerOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coEmployerMontly" type="number" placeholder="months" className="validate" value={this.state.coEmployerMontly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank</td>
                                                            <td>
                                                                <input id="emi" name="coBankSource" type="number" placeholder="$" className="validate" value={this.state.coBankSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coBankOutstanding" type="number" placeholder="$" className="validate" value={this.state.coBankOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coBankMontly" type="number" placeholder="months" className="validate" value={this.state.coBankMontly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Others</td>
                                                            <td>
                                                                <input id="emi" name="coOtherSource" type="number" placeholder="$" className="validate" value={this.state.coOtherSource} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coOtherOutstanding" type="number" placeholder="$" className="validate" value={this.state.coOtherOutstanding} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="coOtherMontly" type="number" placeholder="months" className="validate" value={this.state.coOtherMontly} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>


                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>


                                            <div className="col s12 m12 mt2rem">
                                                <p className="semibold bluetitle">Bank Account Details</p>
                                                <p className="opa9">
                                                    <b>Note:</b> Please mention the details of your salary accont in row 1 and other INDIAN
                                                    and OVERSEAS a/c in row 2 & 3
                                                </p>

                                                <div className="xscroll">
                                                    <table className="pricetable1 mt2rem">


                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td className="vtop semibold">Name of Account Holder</td>
                                                            <td className="vtop semibold text-center">Name of Bank</td>
                                                            <td className="vtop semibold text-center">
                                                                Branch Name
                                                            </td>
                                                            <td className="vtop semibold text-center">Account No.(s)</td>
                                                            <td className="vtop semibold text-center">Type of account</td>

                                                        </tr>

                                                        <tr>
                                                            <td className="semibold">1.</td>
                                                            <td>
                                                                <input id="emi" name="nameOne" type="text" placeholder="Enter Name" className="validate" value={this.state.nameOne} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="bankOne" type="text" placeholder="Enter Bank" className="validate" value={this.state.bankOne} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="branchOne" type="text" placeholder="Enter branch" className="validate" value={this.state.branchOne} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="accountOne" type="text" placeholder="Enter Account no" className="validate" value={this.state.accountOne} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <p onChange={e => this.handleTypeOne(e)}>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="overseas" defaultChecked />
                                                                        <span>Overseas</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRE" />
                                                                        <span>NRE</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRO" />
                                                                        <span>NRO</span>
                                                                    </label>
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="semibold">2.</td>
                                                            <td>
                                                                <input id="emi" name="nameTwo" type="text" placeholder="Enter Name" className="validate" value={this.state.nameTwo} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="bankTwo" type="text" placeholder="Enter Bank" className="validate" value={this.state.bankTwo} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="branchTwo" type="text" placeholder="Enter branch" className="validate" value={this.state.branchTwo} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="accountTwo" type="text" placeholder="Enter Account no" className="validate" value={this.state.accountTwo} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <p onChange={e => this.handleTypeTwo(e)}>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="overseas" defaultChecked />
                                                                        <span>Overseas</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRE"/>
                                                                        <span>NRE</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRO"/>
                                                                        <span>NRO</span>
                                                                    </label>
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="semibold">3.</td>
                                                            <td>
                                                                <input id="emi" name="nameThree" type="text" placeholder="Enter Name" className="validate" value={this.state.nameThree} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="bankThree" type="text" placeholder="Enter Bank" className="validate" value={this.state.bankThree} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="branchThree" type="text" placeholder="Enter branch" className="validate" value={this.state.branchThree} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <input id="emi" name="accountThree" type="text" placeholder="Enter Account no" className="validate" value={this.state.accountThree} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                            <td>
                                                                <p onChange={e => this.handleTypeThree(e)}>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="overseas" defaultChecked />
                                                                        <span>Overseas</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRE"/>
                                                                        <span>NRE</span>
                                                                    </label>
                                                                    <label className="mr5">
                                                                        <input className="with-gap" name="group1" type="radio" value="NRO"/>
                                                                        <span>NRO</span>
                                                                    </label>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>



                                            <div className="col s12 m12 mt2rem">
                                                <p className="semibold bluetitle">Details of Property*
                                                    <span className="opa9 text-black">
                                            (To be Purchased/Constructed/Extended/Improved)
                                        </span>
                                                </p>





                                                <div className="col s12 m6 mt1rem nopadding get-float">
                                                    <p className="semibold mt1rem">Address of dwelling unit:</p>


                                                    <div className="col s12 l12 nopadding">


                                                        <div className="row">
                                                            <div className="col s12 m6 input-field">
                                                                <input id="unitno" name="unitName" type="text" className="validate" value={this.state.unitName} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="unitno">Unit no and Name</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s12 m6 input-field">
                                                                <input id="streetname" name="streetNameUnit" type="text" className="validate" value={this.state.streetNameUnit} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="streetname">Street Name</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s6 input-field">
                                                                <input id="landmark" name="landmarkUnit" type="text" className="validate" value={this.state.landmarkUnit} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="landmark">Landmark</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s6 input-field">
                                                                <input id="pobox" name="pinCode" type="text" className="validate" value={this.state.pinCode} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="pobox">Pin Code</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s12 m4 input-field">
                                                                <input id="city" name="cityUnit" type="text" className="validate" value={this.state.cityUnit} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="city">City</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s12 m4 input-field">
                                                                <input id="state" name="stateUnit" type="text" className="validate" value={this.state.stateUnit} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="state">State</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>

                                                            <div className="col s12 m4 input-field">
                                                                <input id="country" name="countryUnit" type="text" className="validate" value={this.state.countryUnit} onChange={(e) => this.change(e)}/>
                                                                    <label htmlFor="country">Country</label>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col s12 m6 mt1rem">
                                                    <p className="mt1rem semibold">Estimate of Requirement of funds</p>

                                                    <table className="pricetable">


                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td>Area of Land : </td>
                                                            <td>
                                                                <input id="emi" name="land" type="number" placeholder="Sq.m." className="validate" value={this.state.land} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Built-up area : </td>
                                                            <td>
                                                                <input id="emi" name="area" type="number" placeholder="Sq.m." className="validate" value={this.state.area} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Cost of land :</td>
                                                            <td>
                                                                <input id="emi" name="costLand" type="number" placeholder="$" className="validate" value={this.state.costLand} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Cost of construction/purchase/extension: </td>
                                                            <td>
                                                                <input id="emi" name="costConstruction" type="number" placeholder="$" className="validate" value={this.state.costConstruction} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Stage of construction / extension :</td>
                                                            <td>
                                                                <input id="emi" name="stageConstruction" type="number" placeholder="" className="validate" value={this.state.stageConstruction} onChange={(e) => this.change(e)}/>
                                                                    <img alt= ""  src="../imgs/save.gif" className="checkedpos"/>
                                                            </td>
                                                        </tr>


                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>



                                            <div className="col s12 mt1rem navigationbtns">
                                                <a className="waves-effect waves-light transparentbtn btn">Back</a>
                                                <a className="waves-effect waves-light btn" onClick={() => this.onSubmit()}>Next</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>



               <Footer/>

            </div>
        );
    }
}
