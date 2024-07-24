import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './style.css'

export default function DutyReportingForm() {
  return (
        <div>
          <Sidebar />
          <Navbar />
      <div className="checkDiv">
        <h2> Duty Reporting Form </h2>
      </div>
      <div className="form-container-outer">
        <div className="form-container-inner">
          <form>
            <div className="form-group2">
              <label htmlFor="date">Date Of Call:</label>
              <input type="date" id="date" name="date" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="operator_id">Operator ID #:</label>
              <input type="text" id="operator_id" name="operator_id" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="grade">Atty Name and Grade:</label>
              <input type="text" id="grade" name="grade" required />
            </div>
 
            <br />
            <div className="dotted-line"></div>
            <div className="form-group2">
              <label htmlFor="adult">Adult:</label>
              <input type="checkbox" id="adult" name="adult" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="minor">Minor:</label>
              <input type="checkbox" id="minor" name="minor" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="DateOfBirth">Date of Birth:</label>
              <input type="text" id="DateOfBirth" name="DateOfBirth" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="ParentName">Parent Name:</label>
              <input type="text" id="ParentName" name="ParentName" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="ContactNumber">Contact Number:</label>
              <input type="text" id="ContactNumber" name="ContactNumber" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="HomeAddress">Home Address:</label>
              <input type="text" id="HomeAddress" name="HomeAddress" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="ProbationAllowed">Probation Allowed?</label>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="YesProbation">Yes:</label>
              <input type="checkbox" id="YesProbation" name="YesProbation" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NoProbation">No:</label>
              <input type="checkbox" id="NoProbation" name="NoProbation" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="SpecialEducation">Special Education?</label>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="YesEducation">Yes:</label>
              <input type="checkbox" id="YesEducation" name="YesEducation" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NoEducation">No:</label>
              <input type="checkbox" id="NoEducation" name="NoEducation" />
            </div>
 
            <br />
            <div className="dotted-line"></div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="InterpreterNeeded">Interpreter Needed?</label>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="YesInterpreter">Yes:</label>
              <input type="checkbox" id="YesInterpreter" name="YesInterpreter" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NoInterpreter">No:</label>
              <input type="checkbox" id="NoInterpreter" name="NoInterpreter" />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="TypeOfArrest">Type of Arrest</label>
            </div>
 
            <br />
            <div className="form-group2">
              <select id="arrestType" name="arrestType">
                <option>Probation Agency</option>
                <option>Probation Arrest</option>
                <option>Other</option>
              </select>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NameOfAgency">Name of Agency/Division/Probation Officer:</label>
              <input type="text" id="NameOfAgency" name="NameOfAgency" required />
            </div>
 
            <br />
 
            <div className="dotted-line"></div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="CurrentDetentionLOC">Current Detention LOC: </label>
            </div>
 
            <br />
            <div className="form-group2">
              <select id="arrestType" name="arrestType">
                <option>Los Padrinos</option>
                <option>Barry|Nidorf</option>
                <option>Other</option>
              </select>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NextCourtDate">Next Court Date:</label>
              <input type="text" id="NextCourtDate" name="NextCourtDate" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="Department">Department:</label>
              <input type="text" id="Department" name="Department" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="DefendantReleasedDetained">Defendant Released or detained?:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="YesDetained" name="YesDetained" />
              <label htmlFor="YesDetained">Yes:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="NoReleased" name="NoReleased" />
              <label htmlFor="NoReleased">No:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="MinorDefendantMirandized">Minor/Defendant Mirandized?:</label>
 
              </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="YesMirandized" name="YesMirandized" />
              <label htmlFor="YesMirandized">Yes:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="NoMirandized" name="NoMirandized" />
              <label htmlFor="NoMirandized">No:</label>
            </div>
 
            <br />
 
            <div className="form-group2">
              <label htmlFor="MinorSpoken">Minor has spoken to attorney?:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="YesSpoken" name="YesSpoken" />
              <label htmlFor="YesSpoken">Yes:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="NoSpoken" name="NoSpoken" />
              <label htmlFor="NoSpoken">No:</label>
            </div>
 
            <br />
 
            <div className="form-group2">
              <label htmlFor="MinorSpokenToPolice">Minor/Defendant has spoken to Probation or Police?:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="YesMinorSpokenToPolice" name="YesMinorSpokenToPolice" />
              <label htmlFor="YesMinorSpokenToPolice">Yes:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="NoMinorSpokenToPolice" name="NoMinorSpokenToPolice" />
              <label htmlFor="NoMinorSpokenToPolice">No:</label>
            </div>
 
            <br />
            </form>


        </div>
        <div class="form-container-inner">
          <br></br>           
            <div className="form-group2">
              <label htmlFor="ImmigrationStatus">Immigration Status: </label>
            </div>
 
            <br />
            <div className="form-group2">
              <select id="ImmigrationStatusType" name="ImmigrationStatusType">
                <option>US Citizen</option>
                <option>Undocumented</option>
                <option>Foreign</option>
              </select>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="BirthplaceLocation">Birthplace Location: </label>
              <input type="text" id="BirthplaceLocation" name="BirthplaceLocation" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="SpecialEducation">Special Education?</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="YesSpecialEducation" name="YesSpecialEducation" />
              <label htmlFor="YesSpecialEducation">Yes:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="NoSpecialEducation" name="NoSpecialEducation" />
              <label htmlFor="NoSpecialEducation">No:</label>
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="DelinquencyCriminal">Delinquency/Criminal: </label>
            </div>
 
            <br />
            <div className="form-group2">
              <select id="ImmigrationStatusType" name="ImmigrationStatusType">
                <option>Current Juvenile Court Youth</option>
                <option>Current Dependency Court Youth</option>
                <option>None</option>
              </select>
            </div>
 
            <br />
 
            <div className="form-group2">
              <label htmlFor="AttorneyName">Attorney Name: </label>
              <input type="text" id="AttorneyName" name="AttorneyName" required />
            </div>
 
            <div className="dotted-line"></div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="date2">Date Of Call:</label>
              <input type="date" id="date2" name="date2" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="operator_id2">Operator ID #:</label>
              <input type="text" id="operator_id2" name="operator_id2" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="grade2">Atty Name and Grade:</label>
              <input type="text" id="grade2" name="grade2" required />
            </div>
 
            <br />
            <div className="dotted-line"></div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="TimeDetained">Time Detained in hall:</label>
              <input type="time" id="TimeDetained" name="TimeDetained" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="TimeOfIncomingCall">Time of Incoming Call:</label>
              <input type="text" id="TimeOfIncomingCall" name="TimeOfIncomingCall" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="CallDuration">Call Duration:</label>
              <input type="text" id="CallDuration" name="CallDuration" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="TimeOfArrest">Time Of Arrest:</label>
              <input type="text" id="TimeOfArrest" name="TimeOfArrest" required />
            </div>
 
            <br />
            <div className="form-group2">
              <label htmlFor="NameOfOfficerPlacingCall">Name of officer placing call:</label>
              <input type="text" id="NameOfOfficerPlacingCall" name="NameOfOfficerPlacingCall" required />
            </div>
 
            <br />
 
            <div className="dotted-line"></div>
 
            <br />
            <div className="notesTextBox">
              <label htmlFor="AdditionalNotes">Additional Notes:</label>
              <input type="text" id="notes" name="notes" />
            </div>
 
            <br />
            <div className="dotted-line"></div>
 
            <br />
            <div className="form-group2">
              <input type="checkbox" id="Certify" name="Certify" />
              <br />
              <label htmlFor="Certify" className="labeFG2">
                I certify that the above length of call time estimate is true under penalty of perjury under the laws of the State of California Code of Civil Procedure section 2015.5:
              </label>
            </div>
 
            <br />
            <div className="padDiv">
              <label htmlFor="Certify">Date Created 2024/10/23</label>
            </div>
 
            <br />
 
            <div className="padDiv2">
              <a href="#SubmitForm" className="padDiv22">
                Submit Form
              </a>
            </div>
 
            <br />
 
            <div className="padDiv3">
              <a href="#Cancel" className="padDiv33">
                Cancel
              </a>
            </div>
          
        </div>
      </div>
    </div>
     
  );
}
