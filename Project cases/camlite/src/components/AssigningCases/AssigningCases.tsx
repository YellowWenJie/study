import React, { useState, memo, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { BackLink } from 'govuk-react-jsx';
import { getUsers, updateCases, updateTasks } from '../../services/API';

type Props = {
  title: string;
  subTitle: string;
  choices: {
    name: string;
    link: string;
    usersId?: string;
  }[];
};

const links = {
  queue_choice: 'queue-choice',
  cases: '/cases',
  tasks: '/tasks',
};

export default memo(function AssigningCases({
  title,
  subTitle,
  choices,
}: Props) {
  const { url } = useRouteMatch();

  const [linkTo, setLinkTo] = useState<string>(url);
  const [usersId, setUsersId] = useState('');
  const [tipValue, setTipValue] = useState('');
  const history = useHistory();

  let titleName: Array<any> = [];
  const userName = url.substring(1, 6);

  useEffect(() => {
    return () => {
      if (
        url === `${links.cases}/assigning-cases` ||
        url === `${links.tasks}/assigning-tasks`
      ) {
        setLinkTo('');
        return;
      } else {
        setLinkTo(history.location.pathname);
      }
    };
  }, [url]);

  const titleID = () => {
    titleName = Array.from(new Set(titleName));
    let str = '';
    for (let i = 0; i < titleName.length; i++) {
      str += `${titleName[i]}, `;
    }
    str = str.substring(0, str.length - 2);
    return str;
  };

  const tipConfirm = () => {
    return window.confirm(
      `Do you want to assign these cases to ${tipValue}?\n${userName}ID:\n${titleID()}`
    );
  };

  const routerHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.location.state.forEach((item: { usersId: string; id: string }) => {
      titleName.push(item.id);
      item.usersId = usersId;
    });
    switch (linkTo) {
      case links.cases:
        if (tipConfirm()) {
          await Promise.all(
            history.location.state.map((item: { id: string }) =>
              updateCases(item.id, item)
            )
          );
          history.push(linkTo, history.location.state);
        }
        break;
      case links.tasks:
        if (tipConfirm()) {
          await Promise.all(
            history.location.state.map((item: { id: string }) =>
              updateTasks(item.id, item)
            )
          );
          history.push(linkTo, history.location.state);
        }
        break;
      case `${links.cases}/assigning-cases-to-agent`:
      case `${links.tasks}/assigning-tasks-to-agent`:
      case `${links.cases}/assigning-cases-to-other-team`:
      case `${links.tasks}/assigning-tasks-to-other-team`:
      case `${links.cases}/assigning-cases-to-add-queue`:
      case `${links.tasks}/assigning-tasks-to-add-queue`:
        history.push(linkTo, history.location.state);
        break;
    }
  };

  const setValue = (link: string, id: string, val: string) => {
    setLinkTo(link);
    setUsersId(id);
    setTipValue(val);
  };

  return (
    <>
      <BackLink
        onClick={(e: any) => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back
      </BackLink>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <form action={links.queue_choice} method="post" className="form">
            <div className="govuk-form-group">
              <fieldset
                className="govuk-fieldset"
                aria-describedby="transport-option-hint"
              >
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <span className="govuk-caption-l">{title}</span>
                  <h1 className="govuk-fieldset__heading">{subTitle}</h1>
                </legend>

                <div className="govuk-radios">
                  {choices.map((item, index) =>
                    item.link === 'or' ? (
                      <div
                        className="govuk-radios__divider"
                        key={item.name + index}
                      >
                        {item.name}
                      </div>
                    ) : (
                      <div
                        className="govuk-radios__item"
                        key={item.name + index}
                      >
                        <input
                          data-testid="element-input"
                          className="govuk-radios__input"
                          id={url + '-queue-' + index}
                          name={url + '-queue'}
                          type="radio"
                          value={item.link}
                          onChange={() => {
                            setValue(item.link, item.usersId ?? '', item.name);
                          }}
                        />
                        <label
                          className="govuk-label govuk-radios__label"
                          htmlFor={url + '-queue-' + index}
                        >
                          {item.name}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </fieldset>
            </div>

            <button
              className="govuk-button"
              data-module="govuk-button"
              onClick={e => routerHandle(e)}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
});
