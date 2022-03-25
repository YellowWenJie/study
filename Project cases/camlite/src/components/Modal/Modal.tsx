import { Select } from 'govuk-react-jsx';
import ModalTable from './ModalTable';
import {
  ChangeEvent,
  memo,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { updateCases, updateTasks } from '../../services/API';
import './modal.scss';
import { IProps } from './interfaces/IModal';
import { Users } from '../User/Users';
import { Context, CTX } from '../../context/setGlobalDataContext';

export default memo(function Modal(props: IProps): ReactElement {
  const {
    tableHead,
    tableBody,
    selectOption,
    showHandle,
    show,
    selectedTasks,
    updateType,
  } = props;

  const newSelectOption = {
    className: 'govuk-select govuk-!-width-one-half',
    formGroup: {
      className: 'extra-className',
    },
    id: 'option',
    label: {
      children: 'Select an option',
    },
    name: 'option',
    defaultValue: 0,
    ...selectOption,
  };
  const ctx = useContext(Context) as CTX;
  let titleName: Array<any> = [];
  const [selectValue, setSelectValue] = useState<number>(
    newSelectOption.defaultValue
  );

  const selectHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectValue(Number(e.target.value));
  };

  const [teamChecked, setTeamChecked] = useState<boolean>();
  const [teamRole, setTeamRole] = useState<any>();
  const selectAgentId = (checked: boolean, teamRoles: Users) => {
    setTeamChecked(checked);
    setTeamRole(teamRoles);
  };

  useEffect(() => {
    setTeamChecked(false);
  }, [showHandle]);

  const closeShow = () => {
    showHandle(false);
    titleName = [];
  };

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
    selectedTasks.forEach(task => {
      titleName.push(task.id);
    });
    return window.confirm(
      `Do you want to assign these cases to ${teamRole.firstName} ${
        teamRole.lastName
      }?\nID:\n${titleID()}`
    );
  };

  const clickHandle = async () => {
    if (tipConfirm()) {
      if (updateType === '/tasks') {
        await Promise.all(
          selectedTasks.map(data => {
            data.usersId = parseInt(teamRole.id);
            return updateTasks(`${data.id}`, data);
          })
        );
      } else if (updateType === '/cases') {
        await Promise.all(
          selectedTasks.map(data => {
            data.usersId = parseInt(teamRole.id);
            return updateCases(`${data.id}`, data);
          })
        );
      }
      titleName = [];
      showHandle(true);
    }
  };

  return show ? (
    <div className="modal">
      <div className="container">
        <header className="moj-header modal-header" role="banner">
          <div className="moj-header__container">
            <div className="moj-header__logo">
              <div className="moj-header__link moj-header__link--organisation-name">
                Assign to
              </div>
            </div>
            <div className="moj-header__content">
              <nav
                className="moj-header__navigation"
                aria-label="Account navigation"
              >
                <ul className="moj-header__navigation-list">
                  <li className="moj-header__navigation-item">
                    <div
                      className="moj-header__navigation-link closeClick"
                      onClick={closeShow}
                    >
                      Close
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="modal-body">
          <Select
            {...newSelectOption}
            onChange={(e: ChangeEvent<HTMLInputElement>) => selectHandle(e)}
            className="select-element"
          />
          <ModalTable
            tableHead={tableHead}
            tableBody={tableBody}
            selectAgentId={selectAgentId}
          />
        </div>
        <div className="button-items">
          <button
            disabled={!teamChecked}
            className="govuk-button assignClick"
            data-module="govuk-button"
            onClick={clickHandle}
          >
            Assign
          </button>
          <a className="govuk-link">Clear fields</a>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
});
