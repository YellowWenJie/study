import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BackLink } from 'govuk-react-jsx';
import { User } from '../User';

interface AccountProps {
  user?: User;
}

export default memo(function Account(props: AccountProps) {
  const link = {
    profile: '/account/profile',
    position: '/account/position',
  };
  return (
    <>
      <BackLink>Back</BackLink>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-two-thirds'}>
          <h1 className={'govuk-heading-l'}>My account</h1>

          <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
          <h2 className={'govuk-heading-m'}>My profile</h2>
          <Link
            className="govuk-link"
            to={link.profile}
            aria-describedby="my-account-details"
          >
            View or change your CAMLite user profile details
          </Link>
          <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
          <h2 className={'govuk-heading-m'}>Change position</h2>
          <Link
            className="govuk-link"
            to={link.position}
            aria-describedby="change-position"
          >
            View or change your current position
          </Link>
        </div>
      </div>
    </>
  );
});
