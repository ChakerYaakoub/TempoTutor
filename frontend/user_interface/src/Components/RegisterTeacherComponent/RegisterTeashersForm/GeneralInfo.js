import { useEffect, useRef, useReducer } from "react";
import "./GeneralInfo.css";
import "./SyncfusionForm.css";
import * as React from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import {
  TextBoxComponent,
  NumericTextBoxComponent,
  UploaderComponent,
} from "@syncfusion/ej2-react-inputs";
import {
  DropDownListComponent,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import { countryList, nationalities } from "../../../assets/DummyData";
import AllAlert from "../../AllAlert/AllAlert";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

//we have alert in Dialoge popups / form support

let formObject;
const GeneralInfo = ({
  update,
  state,
  error,
  setError,
  completFormsNb,
  setCompletFormsNb,
}) => {
  // firstName: 'chaker',
  // lastName: 'yaakoub',
  // country: '',
  // nationality: '',
  // phone: '',
  // profilePicture: null,
  // identification: null,

  useEffect(() => {
    if (
      state.firstName &&
      state.lastName &&
      state.country &&
      state.nationality &&
      state.phone &&
      state.profilePicture &&
      state.identification &&
      formObject.validate()
    ) {
      setCompletFormsNb({ ...completFormsNb, 1: true });

      setError(false);
    } else {
      setCompletFormsNb({ ...completFormsNb, 1: false });
    }
  }, [
    state.firstName,
    state.lastName,
    state.country,
    state.nationality,
    state.phone,
    state.profilePicture,
    state.identification,
    formObject,
  ]);

  // for the remove profile picture
  function removeProfilePicture() {
    if (document.querySelector("#ProfilePicture")) {
      let removeProfilePictureId = document.querySelector("#ProfilePicture");

      if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
        let removeButtons =
          removeProfilePictureId.querySelector(".e-file-remove-btn");
        removeButtons.addEventListener("click", function () {
          update("profilePicture")(null);
        });
      }
    }
  }

  removeProfilePicture();

  // for the remove the Identification

  function RemoveIdentification() {
    if (document.querySelector("#Identification")) {
      let removeProfilePictureId = document.querySelector("#Identification");

      if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
        let removeButtons =
          removeProfilePictureId.querySelector(".e-file-remove-btn");
        removeButtons.addEventListener("click", function () {
          update("identification")(null);
        });
      }
    }
  }

  RemoveIdentification();

  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focusIn();

    const options = {
      rules: {
        firstName: {
          required: [true, "* Please enter your first name"],
        },
        lastName: {
          required: [true, "* Please enter your last name"],
        },
        country: {
          required: [true, "* Please enter your country"],
        },
        nationality: {
          required: [true, "* Please enter your nationality"],
        },
        phone: {
          // number: [true, '* Please enter a valid phone number'],
          required: [true, "* Please enter your phone number"],
          regex: [
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            "* Please enter a valid phone number with country code (e.g. +961 03123456)",
          ],
        },

        // profilePicture: {
        //   required: [true, '* Please upload your profile picture'],
        // },
        // identification: {
        //   required: [true, '* Please upload your identification document'],
        // }
      },
    };

    formObject = new FormValidator("#GeneralInfoForm", options);
  }, []);

  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        {error && (
          <AllAlert
            type="danger"
            message="Please fill out all the required fields"
          />
        )}
        <div className="control_wrapper textbox-form">
          <form id="GeneralInfoForm">
            <div className="form-group">
              <TextBoxComponent
                ref={userNameRef}
                name="firstName"
                value={state.firstName}
                change={update("firstName")}
                placeholder="First Name"
                floatLabelType="Auto"
                data-msg-containerid="errroForfirstName"
              />
              <div id="errroForfirstName" />
            </div>

            <br />

            <div className="form-group">
              <TextBoxComponent
                name="lastName"
                value={state.lastName}
                change={update("lastName")}
                placeholder="Last Name"
                floatLabelType="Auto"
                data-msg-containerid="errroForlastName"
              />
              <div id="errroForlastName" />
            </div>

            <br />

            <div className="form-group">
              <DropDownListComponent
                name="country"
                value={state.country}
                change={update("country")}
                ignoreAccent={true}
                dataSource={countryList}
                allowFiltering={true}
                placeholder="Country "
                floatLabelType="Auto"
                filterBarPlaceholder="e.g: Lebanon"
                data-msg-containerid="errroForCountry"
              />

              <div id="errroForCountry" />
            </div>

            <br />

            <div className="form-group">
              <DropDownListComponent
                name="nationality"
                value={state.nationality}
                change={update("nationality")}
                ignoreAccent={true}
                dataSource={nationalities}
                allowFiltering={true}
                placeholder="Nationality "
                floatLabelType="Auto"
                filterBarPlaceholder="e.g: Lebanese"
                data-msg-containerid="errroFornationality"
              />

              <div id="errroFornationality" />
            </div>

            <br />

            <div className="form-group">
              <TextBoxComponent
                name="phone"
                value={state.phone}
                change={update("phone")}
                placeholder="Phone Number "
                floatLabelType="Auto"
                data-msg-containerid="errroForphone"
              />
              <div id="errroForphone" />
            </div>

            <br />

            <div className="form-group">
              <p className="ImageFilesP">Profile Picture</p>

              <div id="ProfilePicture">
                <UploaderComponent
                  multiple={false}
                  autoUpload={false}
                  files={state.profilePicture}
                  value={state.profilePicture}
                  change={update("profilePicture")}
                  name="profilePicture"
                  selected={update("profilePicture")}
                  allowedExtensions=".jpeg,.jpg,.png"
                  placeholder="profile Picture"
                  maxFileSize="500 * 1024 * 1024"
                  data-msg-containerid="errorForImage"
                />
              </div>

              <div id="errorForImage" />
            </div>
            <br />

            <div className="form-group">
              <p className="ImageFilesP"> Identification </p>

              <div id="Identification">
                <UploaderComponent
                  multiple={false}
                  autoUpload={false}
                  files={state.identification}
                  value={state.identification}
                  change={update("identification")}
                  name="identification"
                  selected={update("identification")}
                  allowedExtensions=".jpeg,.jpg,.png"
                  placeholder="identification "
                  maxFileSize="500 * 1024 * 1024"
                  data-msg-containerid="errorForidentification"
                />

                {/* backgroundImage: `url(${URL.createObjectURL(state.identification)})`, */}
              </div>

              <div id="errorForidentification" />
            </div>
            <br />

            <div className="divPhotos">
              <TooltipComponent
                content=" Your Profile Picture"
                position="BottomCenter"
              >
                <div className="coverImage">
                  {!state.profilePicture && (
                    <>
                      {" "}
                      <p> your Profile Picture is Void !</p>{" "}
                    </>
                  )}

                  {state.profilePicture && (
                    <>
                      <img
                        id="MyImgChaker"
                        src={URL.createObjectURL(state.profilePicture)}
                        alt=""
                      />
                    </>
                  )}
                </div>
              </TooltipComponent>
              <TooltipComponent
                content=" Your identity "
                position="BottomCenter"
              >
                <div className="coverImage">
                  {!state.identification && (
                    <>
                      {" "}
                      <p> your identification is Void !</p>{" "}
                    </>
                  )}

                  {state.identification && (
                    <>
                      <img
                        id="MyImgChaker"
                        src={URL.createObjectURL(state.identification)}
                        alt=""
                      />
                    </>
                  )}
                </div>
              </TooltipComponent>
            </div>

            {/* <div>
                <AllAlert type="simple" message="Simple Alert Message" />
                <AllAlert type="success" message="Success Alert Message" />
                <AllAlert type="danger" message="Danger Alert Message" />
                <AllAlert type="warning" message="Warning Alert Message" />
              </div> */}

            {/* const alerts = [
        { type: 'error', message: 'Warning! The alerts are too damn awesome!' },
        { type: 'success', message: 'Your alerts have dismissed successfully.' },
        { type: 'info', message: 'Here is an info block. Just playing with colours. also lets make this one have lots and lots of text to show off what line wrapping looks like.' },
        { type: 'warning', message: 'Warnings should be orange correct?' },
        { type: '', message: 'Standard alert with no \'function\' or style specified.' }
      ]; */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
