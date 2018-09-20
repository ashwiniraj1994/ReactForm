import React from 'react';
import './css/formstepper1.css';
import Header from './header/header';
import Footer from './footer/footer';

export default class FormStepper3 extends React.Component {
    state = {
        amount: '',
        termYears: '',
        montlyExpenditure: '',
        montlyEmi: '',
        loanCost: '',
        purchasPrice: '',
        incidentalCost: '',
        otherCosts: '',
        loanOutstanding: '',
        funds: '',
        fixedRate: '',
        adjustRate: '',
        savings: '',
        disposal: '',
        amountSpent: '',
        providentFund: '',
        sourceFunds: '',
        other: '',
        rateOption: '',
        restFrequency: '',
        purposeLoan: ''
    };

    change = e =>  {
        this.setState ({
            [e.target.name]: e.target.value
        });
    };

    handleRest = e => {
        this.setState ({
            restFrequency: e.target.value
        });
    };

    handleOption = e => {
        this.setState ({
            rateOption: e.target.value
        });
    };

    handlePurposeLoan = e => {
        this.setState ({
            purposeLoan: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Header/>
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

                                            <div className="col s3 xl3 nopadding bs-wizard-step active">
                                                <div className="text-center bs-wizard-stepnum">Step 3</div>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                    </div>
                                                </div>
                                                <a href="" className="bs-wizard-dot">
                                                </a>
                                                <div className="bs-wizard-info text-center">Loan Details</div>
                                            </div>

                                            <div className="col s3 xl3 nopadding bs-wizard-step disabled">
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






                                            <div className="get-float">

                                                <div className="col s12 mt1rem">
                                                    <p className="semibold bluetitle">Loan Requested*</p>
                                                </div>

                                                <div className="input-field col s12 m4">

                                                    <input id="amount" name="amount" type="number" className="validate" value={this.state.amount} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="amount">Amount Requested (in $)</label>
                                                        <img alt= ""   src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="input-field col s12 m4">
                                                    <input id="term" name="termYears" type="number" className="validate" value={this.state.termYears} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="term">Term in Year</label>
                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="input-field col s12 m3">
                                                    <input id="middle_name" name="monthlyExpenditure" type="number" className="validate" value={this.state.monthlyExpenditure} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="middle_name">Your Monthly Expenditure (in $)</label>
                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="input-field col s12 m12">
                                                    <p className="get-float">Installment you and co-applicant (if any) can pay to HDFC per month</p>

                                                    <div className="row mb0">
                                                        <div className="input-field col s12 m4">
                                                            <input id="emi" name="montlyEmi" type="number" className="validate" value={this.state.montlyEmi} onChange={(e) => this.change(e)}/>
                                                                <label htmlFor="emi">Monthly EMI (in $)</label>
                                                                <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




                                            <div className="mt1rem get-float">

                                                <div className="col s12 mt1rem">
                                                    <p className="semibold bluetitle">Type of Loan*</p>
                                                </div>

                                                <div className="col s12 m4 mt1rem" onChange={e => this.handleRest(e)} >
                                                    <p className="mb1rem">Rest Frequency</p>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="annual" />
                                                        <span>Annual</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="monthly" />
                                                        <span>Monthly</span>
                                                    </label>
                                                </div>

                                                <div className="col s12 m8 mt1rem" onChange={e => this.handleOption(e)}>
                                                    <p className="mb1rem">Rate Option</p>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="fixed" />
                                                        <span>Fixed</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="adjustable" />
                                                        <span>Adjustable</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="combination" />
                                                        <span>Combination</span>
                                                    </label>
                                                </div>


                                            </div>


                                            <div className="mt1rem get-float">

                                                <div className="col s12 mt1rem">
                                                    <p className="semibold bluetitle">Loan Details*</p>
                                                </div>

                                                <div className="col s12 m12 mt1rem" onChange={e => this.handlePurposeLoan(e)}>
                                                    <p className="mb1rem">Purpose of Loan</p>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="construction" />
                                                        <span>Construction</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="purchase" />
                                                        <span>Purchase</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="extension" />
                                                        <span>Extension</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="improvement" />
                                                        <span>Improvement</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="refinance" />
                                                        <span>Refinance</span>
                                                    </label>
                                                </div>

                                                <div className="get-float mt2rem">

                                                    <div className="col s12 m6">
                                                        <p className="mb1rem semibold">Estimate of Requirement of funds</p>

                                                        <table className="pricetable">


                                                            <tbody>
                                                            <tr>
                                                                <td>1.</td>
                                                                <td>Land cost</td>
                                                                <td>
                                                                    <input id="emi" name="loanCost" type="number" placeholder="$" className="validate" value={this.state.loanCost} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2.</td>
                                                                <td>Total purchase price/construction cost</td>
                                                                <td>
                                                                    <input id="emi" name="purchasePrice" type="number" placeholder="$" className="validate" value={this.state.purchasePrice} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3.</td>
                                                                <td>Incidental costs (if any)
                                                                    <br/>e.g. Stamp duty, Registration charges, etc.</td>
                                                                <td>
                                                                    <input id="emi" name="incidentalCost" type="number" placeholder="$" className="validate" value={this.state.incidentalCost} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>4.</td>
                                                                <td>Other costs (please specify)</td>
                                                                <td>
                                                                    <input id="emi" name="otherCosts" type="number" placeholder="$" className="validate" value={this.state.otherCosts} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>5.</td>
                                                                <td>Loan outstanding (For refinance)</td>
                                                                <td>
                                                                    <input id="emi" name="loanOutstanding" type="number" placeholder="$" className="validate" value={this.state.loanOutstanding} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className="semibold">A.</td>
                                                                <td>
                                                                    <span className="semibold">Total requirement of funds</span> (Total)</td>
                                                                <td>
                                                                    <input id="emi" name="funds" type="number" placeholder="$" className="validate" value={this.state.funds} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>

                                                    <div className="col s12 m6">
                                                        <p className="mb1rem semibold">Estimate of Sources to meet requirement of funds</p>

                                                        <table className="pricetable">


                                                            <tbody>
                                                            <tr>
                                                                <td>6.</td>
                                                                <td>Loan requested from HDFC</td>
                                                                <td>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Fixed Rate</td>
                                                                <td>
                                                                    <input id="emi" name="fixedRate" type="number" placeholder="$" className="validate" value={this.state.fixedRate} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Adjustable Rate</td>
                                                                <td>
                                                                    <input id="emi" name="adjustRate" type="number" placeholder="$" className="validate" value={this.state.adjustRate} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>7.</td>
                                                                <td>Savings from Bank</td>
                                                                <td>
                                                                    <input id="emi" name="savings" type="number" placeholder="$" className="validate" value={this.state.savings} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>8.</td>
                                                                <td>Disposal of investments
                                                                    <br/>(fixed deposits / shares, etc.)</td>
                                                                <td>
                                                                    <input id="emi" name="disposal" type="number" placeholder="$" className="validate" value={this.state.disposal} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>9.</td>
                                                                <td>Amount already spent</td>
                                                                <td>
                                                                    <input id="emi" name="amountSpent" type="number" placeholder="$" className="validate" value={this.state.amountSpent} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>10.</td>
                                                                <td>Provident Fund (refundable/non-refundable)</td>
                                                                    <td>
                                                                        <input id="emi" name="providentFund" type="number" placeholder="$" className="validate" value={this.state.providentFund} onChange={(e) => this.change(e)}/>
                                                                            <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                    </td>
                                                            </tr>
                                                            <tr>
                                                                <td>11.</td>
                                                                <td>Other</td>
                                                                    <td>
                                                                        <input id="emi" name="other" type="number" placeholder="$" className="validate" value={this.state.other} onChange={(e) => this.change(e)}/>
                                                                            <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                    </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="semibold">B.</td>
                                                                <td>
                                                                    <span className="semibold">Estimate of sources of funds</span> (Total)</td>
                                                                <td>
                                                                    <input id="emi" name="sourceFunds" type="number" placeholder="$" className="validate" value={this.state.sourceFunds} onChange={(e) => this.change(e)}/>
                                                                        <img alt= ""  src="../imgs/checked.svg" className="checkedpos"/>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="col s12">
                                                        <p className="opa9">
                                                            <b>Note:</b> 'A' which is the total requirement of funds, should equal estimate
                                                            of sources, 'B' which indicates the sources from where the cost will be met.
                                                            <span className="semibold">It is important that you indicate in detail the sources from where the cost
                                                    will be met in order to help us process your application faster</span>
                                                        </p>
                                                    </div>

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