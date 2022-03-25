import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BackLink } from 'govuk-react-jsx';

const link = {
  changeRole: 'position-notification',
};

export default memo(function Position() {
  return (
    <>
      <BackLink>Back</BackLink>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-two-thirds'}>
          <h1 className={'govuk-heading-l'}>Current Active Position</h1>
          <form action={link.changeRole} method="post" className="form">
            <div className="govuk-form-group">
              <fieldset className="govuk-fieldset">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h1 className="govuk-fieldset__heading">Change position</h1>
                  <div id="more-detail-hint" className="govuk-hint">
                    To change your active position, select another and click
                    'change position'.
                  </div>
                </legend>
                <div className="govuk-radios" data-module="govuk-radios">
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="position-1"
                      name="position"
                      type="radio"
                      value="teamleader"
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="position-1"
                    >
                      Team Leader
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="position-2"
                      name="position"
                      type="radio"
                      value="agent"
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="position-2"
                    >
                      Agent
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="govuk-button-group">
              <button
                type="submit"
                className="govuk-button"
                data-module="govuk-button"
              >
                Save and continue
              </button>

              <Link className="govuk-link" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});
