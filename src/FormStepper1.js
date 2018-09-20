import React from 'react';
import './css/formstepper1.css';
import Header from './header/header';
import Footer from './footer/footer';

export default class FormStepper1 extends React.Component {
    state = {
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '--Select--',
        guardianFirstName: '',
        guardianLastName: '',
        guardianMiddleName: '',
        guardianSuffix: '--Select--',
        houseNo: '',
        streetName: '',
        postBox: '',
        landmark : '',
        city: '',
        stateMap: '',
        Country: '',
        currentResidence: '',
        houseNum: '',
        streetNameAlt: '',
        landmarkAlt: '',
        zipcode: '',
        cityAlt: '',
        stateAlt: '',
        telephone: '',
        mobileNum: '',
        emailId: '',
        age: '',
        date: '',
        dependencyChild: '',
        dependencyOther: '',
        monthlyIncome: '',
        otherIncome: '',
        sourceIncome: '',
        businessName: '',
        officePhone: '',
        officeEmail: '',
        officeNum: '',
        officeStreetName: '',
        officeLandmark: '',
        officePostBox: '',
        officeState: '',
        officeCity: '',
        officeCountry: '',
        years: '',
        retirementAge: '',
        department: '',
        branch: '',
        employeeNum: '',
        passNum: '',
        passValue: '',
        gender: '',
        maritalStatus: '',
        occupation: '',
        qualification: '--Select--'
    };

    change = e =>  {
        this.setState ({
            [e.target.name]: e.target.value
        });
    };

    handleChange = e => {
        this.setState ({
            suffix: e.target.value
        });
    };

    handleGuardianSuffix = e => {
        this.setState ({
            guardianSuffix: e.target.value
        });
    };

    handleQualification = e => {
        this.setState ({
            qualification: e.target.value
        });
    };

    handleCurrentResidence = e => {
        this.setState ({
            currentResidence: e.target.value
        });
    };

    handleGender = e => {
        this.setState ({
            gender: e.target.value
        });
    };

    handleMaritalStatus = e => {
        this.setState ({
            maritalStatus: e.target.value
        });
    };

    handleOccupation = e => {
        this.setState ({
            occupation: e.target.value
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

                                <div className="col s3 xl3 nopadding bs-wizard-step active">
                                    <div className="text-center bs-wizard-stepnum">Step 1</div>
                                    <div className="progress">
                                        <div className="progress-bar">
                                        </div>
                                    </div>
                                    <a href="" className="bs-wizard-dot">
                                    </a>
                                    <div className="bs-wizard-info text-center">Personal Information</div>
                                </div>

                                <div className="col s3 xl3 nopadding bs-wizard-step disabled">
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

                                <div className="col s3 xl3 nopadding bs-wizard-step disabled">
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


                                <div className="mt1rem get-float">

                                    <div className="col s12 mb1rem">
                                        <p className="semibold bluetitle">Name in Full*</p>
                                    </div>

                                    <div className="input-field col s12 m2">

                                        <select defaultValue="Mr." onChange={this.handleChange}>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Ms.">Ms.</option>
                                        </select>
                                        <label>Suffix (optional)</label>

                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="first_name" name="firstName" type="text" className="validate" value={this.state.firstName} onChange={(e) => this.change(e)} required/>
                                            <label htmlFor="first_name">First Name</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="middle_name" name="middleName" type="text" className="validate" value={this.state.middleName} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="middle_name">Middle Initial (optional)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="last_name" name="lastName" type="text" className="validate" value={this.state.lastName} onChange={(e) => this.change(e)} required/>
                                            <label htmlFor="last_name">Last Name</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                </div>


                                <div className="mt1rem get-float">

                                    <div className="col s12 mb1rem">
                                        <p className="semibold bluetitle">Father/Husband/Guardian Name*</p>
                                    </div>

                                    <div className="input-field col s12 m2">

                                        <select value={this.state.guardianSuffix} onChange={this.handleGuardianSuffix}>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Ms.">Ms.</option>
                                        </select>
                                        <label>Suffix (optional)</label>

                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="ffirst_name" name="guardianFirstName" type="text" className="validate" value={this.state.guardianFirstName} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="ffirst_name">First Name</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="fmiddle_name" name="guardianMiddleName" type="text" className="validate" value={this.state.guardianMiddleName} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="fmiddle_name">Middle Initial (optional)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="flast_name" name="guardianLastName" type="text" className="validate" value={this.state.guardianLastName} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="flast_name">Last Name</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                </div>


                                <div className="col s12 m6 mt1rem get-float">

                                    <div className="mb1rem">
                                        <p className="semibold bluetitle">Current Residential Address*</p>
                                    </div>

                                    <div className="col s12 l12 nopadding">


                                        <div className="row">
                                            <div className="col s12 m6 input-field">
                                                <input id="houseno" name="houseNo" type="text" className="validate" value={this.state.houseNo} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="houseno">House No and Name</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m6 input-field">
                                                <input id="streetname" name="streetName" type="text" className="validate" value={this.state.streetName} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="streetname">Street Name</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s6 input-field">
                                                <input id="landmark" name="landmark" type="text" className="validate" value={this.state.landmark} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="landmark">Landmark</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s6 input-field">
                                                <input id="pobox" name="postBox" type="text" className="validate" value={this.state.postBox} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="pobox">P.O. box</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m4 input-field">
                                                <input id="city" name="city" type="text" className="validate" value={this.state.city} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="city">City</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m4 input-field">
                                                <input id="state" name="stateMap" type="text" className="validate" value={this.state.stateMap} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="state">State</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m4 input-field">
                                                <input id="country" name="country" type="text" className="validate" value={this.state.country} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="country">Country</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 input-field" onChange={e => this.handleCurrentResidence(e)}>
                                                <p className="mb1rem get-float">Current Residence is</p>
                                                <p>
                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="selfowned"/>
                                                        <span>Self owned</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="family" />
                                                        <span>Family</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="rented" />
                                                        <span>Rented</span>
                                                    </label>

                                                    <label className="mr10">
                                                        <input className="with-gap" name="group1" type="radio" value="leased" />
                                                        <span>Company Leased</span>
                                                    </label>
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div className="col s12 m6 mt1rem get-float">

                                    <div className="mb1rem">
                                        <p className="semibold bluetitle">Permanent Address in India*</p>
                                    </div>

                                    <div className="row">
                                        <div className="col s12 l12 nopadding">


                                            <div className="col s12 m6 input-field">
                                                <input id="ihouseno" type="text" className="validate" value={this.state.houseNum} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="ihouseno">House No and Name</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m6 input-field">
                                                <input id="istreetname" type="text" className="validate" value={this.state.streetNameAlt} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="istreetname">Street Name</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s6 input-field">
                                                <input id="ilandmark" type="text" className="validate" value={this.state.landmarkAlt} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="ilandmark">Landmark</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s6 input-field">
                                                <input id="izipcode" type="text" className="validate" value={this.state.zipcode} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="izipcode">Zipcode</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m6 input-field">
                                                <input id="icity" type="text" className="validate" value={this.state.cityAlt} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="city">City</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                            <div className="col s12 m6 input-field">
                                                <input id="istate" type="text" className="validate" value={this.state.stateAlt} onChange={(e) => this.change(e)}/>
                                                    <label htmlFor="istate">State</label>
                                                    <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div className="mt1rem get-float nospinner">

                                    <div className="col s12 mb1rem">
                                        <p className="semibold bluetitle">Contact & Common Details*</p>
                                    </div>

                                    <div className="input-field col s12 m4 nospinner">
                                        <input id="std" type="text" className="validate" value={this.state.telephone} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="std">Telephone (with STD code)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4 nospinner">
                                        <input id="mobno" type="text" className="validate" value={this.state.mobileNum} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="mobno">Mobile Number</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="emailid" type="text" className="validate" value={this.state.emailId} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="emailid">Email Address</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input type="text" className="datepicker" value={this.state.date} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="emailid">Date of Birth</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="age" type="text" className="validate" value={this.state.age} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="age">Age</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="row col s12 nopadding mb0">
                                        <div className="col s12 m4 input-field mt5" onChange={e => this.handleGender(e)}>
                                            <p className="mb1rem get-float">Gender</p>
                                            <p>
                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="male" />
                                                    <span>Male</span>
                                                </label>

                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="female" />
                                                    <span>Female</span>
                                                </label>
                                            </p>
                                        </div>

                                        <div className="col s12 m8 input-field mt5 mb1rem" onChange={e => this.handleMaritalStatus(e)}>
                                            <p className="mb1rem get-float">Status/Maritial Status</p>
                                            <p>
                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="nonresident" />
                                                    <span>Non-Resident</span>
                                                </label>

                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="pio" />
                                                    <span>PIO's</span>
                                                </label>

                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="single" />
                                                    <span>Single</span>
                                                </label>

                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="married" />
                                                    <span>Married</span>
                                                </label>

                                                <label className="mr10">
                                                    <input className="with-gap" name="group1" type="radio" value="other" />
                                                    <span>Other</span>
                                                </label>
                                            </p>
                                        </div>

                                        <div className="col s12 m6 input-field">
                                            <p className="get-float">No of Dependents</p>

                                            <div className="row mb0">
                                                <div className="input-field col s12 m6">
                                                    <input id="child" type="number" className="validate" value={this.state.dependancyChild} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="child">Childrens</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="input-field col s12 m6">
                                                    <input id="othres" type="number" className="validate" value={this.state.dependencyOther} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="othres">Others</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>



                                <div className="mt1rem get-float">
                                    <div className="col s12 mb1rem">
                                        <p className="semibold bluetitle">Business Details*</p>
                                    </div>

                                    <div className="col s12 m12 input-field mb1rem">
                                        <p className="get-float mb1rem">Occupation & Designation</p>

                                        <div onChange={e => this.handleOccupation(e)}>
                                            <label className="mr10">
                                                <input className="with-gap" name="group1" type="radio" value="employed" />
                                                <span>Employed</span>
                                            </label>

                                            <label className="mr10">
                                                <input className="with-gap" name="group1" type="radio" value="self-employed" />
                                                <span>Self employed</span>
                                            </label>
                                        </div>

                                    </div>

                                    <div className="col s12 m3 input-field">
                                        <select value={this.state.qualification} onChange={this.handleQualification}>
                                            <option value="BE/B.Tech">BE/B.Tech</option>
                                            <option value="Graduate">Graduate</option>
                                            <option value="PostGraduate">Post Graduate</option>
                                        </select>
                                        <label>Qualification</label>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="mincome" type="number" className="validate" value={this.state.monthlyIncome} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="mincome">Monthly Income ($)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="oincome" type="number" className="validate" value={this.state.otherIncome} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="oincome">Other Income ($)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m3">
                                        <input id="source" type="text" className="validate" value={this.state.sourceIncome} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="source">Source of Other Income</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="businame" type="text" className="validate" value={this.state.businessName} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="businame">Employer/Business Name</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4 nospinner">
                                        <input id="offnumber" type="number" className="validate" value={this.state.officePhone} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="offnumber">Office Phone No (with ISD Code)</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="input-field col s12 m4">
                                        <input id="oemail" type="text" className="validate" value={this.state.officeEmail} onChange={(e) => this.change(e)}/>
                                            <label htmlFor="oemail">Office Email ID</label>
                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                    </div>

                                    <div className="col s12 m12 input-field">
                                        <p className="get-float">Office Address
                                        </p>

                                        <div className="col s12 l12 nopadding">


                                            <div className="row mb0">
                                                <div className="col s12 m4 input-field">
                                                    <input id="ono" type="text" className="validate" value={this.state.officeNum} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="ono">Office No and Name</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s12 m4 input-field">
                                                    <input id="ostreetname" type="text" className="validate" value={this.state.officeStreetName} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="ostreetname">Street Name</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s12 m4 input-field">
                                                    <input id="olandmark" type="text" className="validate" value={this.state.officeLandmark} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="olandmark">Landmark</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s6 m3 input-field">
                                                    <input id="opobox" type="text" className="validate" value={this.state.officepostBox} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="opobox">P.O. box</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s6 m3 input-field">
                                                    <input id="ocity" type="text" className="validate" value={this.state.officeCity} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="ocity">City</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s6 m3 input-field">
                                                    <input id="ostate" type="text" className="validate" value={this.state.officeState} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="ostate">State</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s6 m3 input-field">
                                                    <input id="ocountry" type="text" className="validate" value={this.state.officeCountry} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="ocountry">Country</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col s12 m12 input-field">
                                        <p className="get-float">Other Occupation Related Details
                                        </p>

                                        <div className="col s12 l12 nopadding">


                                            <div className="row mb0">

                                                <div className="col s12 m3 input-field">
                                                    <input id="yearsoccu" type="number" className="validate" value={this.state.years} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="yearsoccu">Years in Present Occupation</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s12 m3 input-field">
                                                    <input id="retire" type="number" className="validate" value={this.state.retirementAge} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="retire">Retirement Age (in Years)</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s12 m3 input-field">
                                                    <input id="department" type="text" className="validate" value={this.state.department} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="department">Department</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                                <div className="col s12 m3 input-field">
                                                    <input id="employeeno" type="text" className="validate" value={this.state.employeeNum} onChange={(e) => this.change(e)}/>
                                                        <label htmlFor="employeeno">Employee No</label>
                                                        <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="mt1rem get-float">
                                        <div className="col s12 mb1rem">
                                            <p className="semibold bluetitle">Important Details*</p>
                                        </div>


                                        <div className="col s12 m12 input-field">
                                            <p className="get-float">Passport Details
                                            </p>

                                            <div className="col s12 l12 nopadding">


                                                <div className="row mb0">
                                                    <div className="col s12 m4 input-field">
                                                        <input id="passno" type="text" className="validate" value={this.state.passNum} onChange={(e) => this.change(e)}/>
                                                            <label htmlFor="passno">Passport No.</label>
                                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                    </div>

                                                    <div className="col s12 m4 input-field">
                                                        <input id="passval" type="text" className="datepicker" value={this.state.passValid} onChange={(e) => this.change(e)}/>
                                                            <label htmlFor="passval">Passport Valid Upto</label>
                                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col s12 m12 input-field">
                                            <p className="get-float">Please indicate preferred HDFC location htmlFor processing your application in India:
                                            </p>

                                            <div className="col s12 l12 nopadding">


                                                <div className="row mb0">
                                                    <div className="col s12 m4 input-field">
                                                        <input id="branch" type="text" className="validate" value={this.state.branch} onChange={(e) => this.change(e)}/>
                                                            <label htmlFor="branch">Indian Branch</label>
                                                            <img alt="" src="../imgs/checked.svg" className="checkedpos"/>
                                                    </div>
                                                </div>
                                            </div>
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