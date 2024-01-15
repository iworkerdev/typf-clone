let html = `
   <div class="container">
          <div id="modal-js-example" class="modal">
            <div class="modal-background"></div>
            <div
              class="container.is-widescreen modal-content box content-box question-background-image is-hidden"
              id="question-container-wrapper"
            >
              <div
                class="is-flex full-height full-width is-justify-content-center is-align-content-center is-align-items-center relative flex-container"
                id="fluid-container"
              >
                <div class="navigation-btn-container p-3">
                  <div
                    class="is-flex is-flex-direction-row is-justify-content-end is-align-content-center is-align-items-center hide-on-sm"
                  >
                    <button
                      class="button is-info mt-4 custom-button primary-button is-hidden left-nav-btn"
                      id="prev-button_js"
                    >
                      <span class="icon is-small">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                    </button>
                    <button class="button is-info mt-4 custom-button primary-button right-nav-btn" id="next-button_js">
                      <span class="icon is-small">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  class="is-flex is-flex-direction-column full-height full-width is-justify-content-center is-align-content-center w-50 pl-1"
                >
                  <div
                    class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center question-container full-width"
                    id="question-1"
                  >
                    <div class="is-flex is-flex-direction-column p-2 py-4 w-90">
                      <p
                        class="subtitle text-align-left is-size-4 is-size-5-mobile has-text-weight-medium is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                      >
                        <span
                          class="is-size-6 inline-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center flex-gap-1"
                        >
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center purple-1"
                          >
                            1
                          </span>
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                          >
                            <i class="fa-solid fa-arrow-right is-size-7 purple-1 has-text-weight-bold"></i>
                          </span>
                        </span>
                        Describe the website you want to build.
                        <span class="has-text-danger">*</span>
                      </p>
                      <textarea
                        class="textarea input-box is-size-4"
                        placeholder="Type your answer here..."
                        id="project_description"
                        name="project_description"
                        rows="1"
                        required
                        style="resize: none"
                      >
                      </textarea>
                      <p
                        class="help is-danger is-hidden is-size-6 is-size-7-mobile has-background-danger-light py-2 px-4 w-fit-content rounded-sm"
                        id="project_description_required_error"
                        style="text-align: left; margin-top: 10px"
                      >
                        <i class="fas fa-exclamation-triangle"></i>
                        Please fill this in
                      </p>
                      <div class="is-flex is-flex-direction-row">
                        <button
                          class="button is-info mt-4 custom-button primary-button"
                          id="project_description_submit"
                        >
                          <span> OK </span>
                          <span class="icon is-small">
                            <i class="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="is-flex is-flex-direction-row question-inactive question-container is-align-content-center is-align-items-center is-justify-content-start px-3 full-width"
                    id="question-2"
                  >
                    <div class="is-flex is-flex-direction-column p-2 py-4 w-90">
                      <p
                        class="subtitle text-align-left is-size-4 is-size-5-mobile has-text-weight-medium is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                      >
                        <span
                          class="is-size-6 inline-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center flex-gap-1"
                        >
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center purple-1"
                          >
                            2
                          </span>
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                          >
                            <i class="fa-solid fa-arrow-right is-size-7 purple-1 has-text-weight-bold"></i>
                          </span>
                        </span>

                        What is your first name?
                        <span class="has-text-danger">*</span>
                      </p>
                      <input
                        class="input input-box is-size-5"
                        type="text"
                        placeholder="Type your answer here..."
                        id="first_name"
                        name="first_name"
                        required
                      />
                      <p
                        class="help is-danger is-hidden is-size-6 is-size-7-mobile has-background-danger-light py-2 px-4 w-fit-content rounded-sm"
                        id="first_name_required_error"
                        style="text-align: left; margin-top: 10px"
                      >
                        <i class="fas fa-exclamation-triangle"></i>
                        Please fill this in
                      </p>
                      <div class="is-flex is-flex-direction-row">
                        <button class="button is-info mt-4 custom-button primary-button" id="first_name_submit">
                          <span> OK </span>
                          <span class="icon is-small">
                            <i class="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="is-flex is-flex-direction-row question-inactive question-container px-3" id="question-3">
                    <div class="is-flex is-flex-direction-column p-2 py-4">
                      <p
                        class="subtitle text-align-left is-size-4 is-size-5-mobile has-text-weight-medium is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                      >
                        <span
                          class="is-size-6 inline-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center flex-gap-1"
                        >
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center purple-1"
                          >
                            3
                          </span>
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                          >
                            <i class="fa-solid fa-arrow-right is-size-7 purple-1 has-text-weight-bold"></i>
                          </span>
                        </span>
                        What is your Email?
                        <span class="has-text-danger">*</span>
                      </p>
                      <p class="subtitle text-align-left is-size-5 is-size-6-mobile">
                        We protect your privacy and will never spam you. 🔒
                      </p>
                      <input
                        class="input input-box is-size-5"
                        type="text"
                        placeholder="e.g. name@example.com"
                        id="email_address"
                        name="email_address"
                        required
                      />
                      <p
                        class="help is-danger is-hidden is-size-6 is-size-7-mobile has-background-danger-light py-2 px-4 w-fit-content rounded-sm"
                        id="email_address_required_error"
                        style="text-align: left; margin-top: 10px"
                      >
                        <i class="fas fa-exclamation-triangle"></i>
                        Please fill this in
                      </p>

                      <p
                        class="help is-danger is-hidden is-size-6 is-size-7-mobile has-background-danger-light py-2 px-4 w-fit-content rounded-sm"
                        id="email_address_validation_error"
                        style="text-align: left; margin-top: 10px"
                      >
                        <i class="fas fa-exclamation-triangle"></i>
                        Hmm... that email doesn't look right
                      </p>

                      <div class="is-flex is-flex-direction-row">
                        <button class="button is-info mt-4 custom-button primary-button" id="email_address_submit">
                          <span> OK </span>
                          <span class="icon is-small">
                            <i class="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="is-flex is-flex-direction-row question-inactive question-container px-3" id="question-4">
                    <div class="is-flex is-flex-direction-column p-2 py-4">
                      <p
                        class="subtitle text-align-left is-size-4 is-size-5-mobile has-text-weight-medium is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                      >
                        <span
                          class="is-size-6 inline-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center flex-gap-1"
                        >
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center purple-1"
                          >
                            4
                          </span>
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                          >
                            <i class="fa-solid fa-arrow-right is-size-7 purple-1 has-text-weight-bold"></i>
                          </span>
                        </span>

                        (Optional but can greatly improve your chances) - Phone number
                      </p>
                      <p class="subtitle text-align-left is is-size-5 is-size-6-mobile">
                        If we're on the fence about your application, we may reach out via Whatsapp to talk through
                        various aspects of your website proposal and to see if you're a fit for us.
                      </p>

                       <div class="is-flex is-flex-direction-row p-1">
                        <div class="dropdown dropdown-container" id="searchableSelect">
                          <div class="dropdown-trigger">
                            <button class="custom-button" style="padding: 8px !important" id="dropdown-btn-trigger"></button>
                          </div>
                          <div class="dropdown-menu styled-dropdown has-background-white">
                            <input
                              type="text"
                              class="input input-box is-size-5 mb-2"
                              placeholder="Search Country"
                              id="searchInput"
                              style="width: 90%"
                            />
                            <div
                              class="dropdown-content select-box styled-dropdown-content has-background-white"
                              id="dropdownContent"
                            ></div>
                          </div>
                        </div>

                        <input
                          class="input input-box border-left is-size-5"
                          type="text"
                          placeholder="e.g. 1234567890"
                          id="phone_number"
                          name="phone_number"
                          maxlength="15"
                          minlength="7"
                        />
                      </div>

                      <p
                        class="help is-danger is-hidden is-size-6 box has-background-danger-light"
                        id="phone_number_validation_error"
                        style="text-align: left; margin-top: 10px"
                      >
                        <i class="fas fa-exclamation-triangle"></i>
                        Please enter a valid phone number.
                      </p>

                      <div class="is-flex is-flex-direction-row">
                        <button class="button is-info mt-4 custom-button primary-button" id="phone_number_submit">
                          <span> OK </span>
                          <span class="icon is-small">
                            <i class="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="is-flex is-flex-direction-row question-inactive question-container px-3" id="question-5">
                    <div class="is-flex is-flex-direction-column p-2 py-4">
                      <p
                        class="subtitle text-align-left is-size-4 is-size-5-mobile has-text-weight-medium is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                      >
                        <span
                          class="is-size-6 inline-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center flex-gap-1"
                        >
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center purple-1"
                          >
                            5
                          </span>
                          <span
                            class="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
                          >
                            <i class="fa-solid fa-arrow-right is-size-7 purple-1 has-text-weight-bold"></i>
                          </span>
                        </span>

                        Do you have web hosting already?
                        <span class="has-text-danger">*</span>
                      </p>
                      <div class="is-flex is-flex-direction-column text-align-left" id="web_hosting">
                        <button
                          class="button is-info mt-4 w-fit-content btn-outline-info"
                          id="no_web_hosting_submit"
                          style="text-align: left"
                        >
                          <span
                            class="text-align-left full-width is-flex is-flex-direction-row is-align-content-center is-align-items-center"
                          >
                            <span class="radio-option-button">A</span>
                            <span> No, I don't </span>
                            <span class="icon is-small is-hidden" id="no_web_hosting_selected_icon">
                              <i class="fas fa-check"></i>
                            </span>
                          </span>
                        </button>
                        <button
                          class="button is-info mt-4 text-align-left w-fit-content btn-outline-info"
                          id="has_web_hosting_submit"
                        >
                          <span
                            class="text-align-left full-width is-flex is-flex-direction-row is-align-content-center is-align-items-center"
                          >
                            <span class="radio-option-button">B</span>
                            <span> Yes, I have web hosting </span>
                            <span class="icon is-small is-hidden" id="has_web_hosting_selected_icon">
                              <i class="fas fa-check"></i>
                            </span>
                          </span>
                        </button>

                        <div class="py-4 is-flex is-flex-direction-row is-hidden" id="form_submit_container">
                          <button
                            class="button is-info mt-4 text-align-left is-success custom-button primary-button"
                            id="form_submit_button"
                          >
                            <span
                              class="text-align-left full-width is-flex is-flex-direction-row is-align-content-center is-align-items-center"
                            >
                              <span class="icon is-small">
                                <i class="fas fa-check"></i>
                              </span>
                              <span> Submit </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-50 is-hidden-mobile">
                  <div id="modal-image" class="modal-image-banner"></div>
                </div>
              </div>
            </div>

            <button class="modal-close is-large" aria-label="close" id="close-modal-button_js"></button>
          </div>
        </div>
        <div
          class="is-flex is-flex-direction-row is-justify-content-center is-align-content-center is-align-items-center"
        >
          <button
            class="js-modal-trigger is-info button custom-button apply-button-fdb226"
            data-target="modal-js-example"
            id="apply-button-fdb226"
          >
            Apply in 2 minutes
          </button>
        </div>
        <a href="https://thefreewebsiteguys.com/thank-you/" id="thank-you-link"></a>
`;

// get all sections with class name "fwg-application-form-bf3d21b93900" and append the html to it
var sections = document.getElementsByClassName(
  "fwg-application-form-bf3d21b93900"
);

for (let i = 0; i < sections.length; i++) {
  sections[i].innerHTML = html;
}
