import React from 'react';
import { useHistory } from 'react-router-dom';
import { clock12, longMonth } from '../../../helpers/dwp';
import { Button } from 'govuk-react-jsx';
interface Props {
  items: Array<any>;
  type?: string;
  userId?: string;
  customersId?: string;
}

export default function MOJTimeLine(props: Props) {
  const history = useHistory();
  const { items, type, userId, customersId } = props;

  return (
    <>
      <div className="moj-timeline">
        {type && (
          <div className="moj-timeline__item">
            <div className="moj-timeline__header">
              <Button
                className="govuk-button govuk-!-margin-bottom-0 element-addBtn"
                onClick={(event: any) => {
                  event.preventDefault();
                  history.push(`/add-note/${type}/${customersId}`, userId);
                }}
              >
                Add notes
              </Button>
            </div>
          </div>
        )}

        {items.reverse().map((item, index) => (
          <div className="moj-timeline__item" key={index}>
            <div className="moj-timeline__header">
              <h2 className="moj-timeline__title">{item.title}</h2>
              <p className="moj-timeline__byline">{' ' + item.byline}</p>
            </div>
            <p className="moj-timeline__date">
              <time dateTime={item.time}>
                {longMonth(item.time)} at {clock12(item.time)}
              </time>
            </p>
            <div className="moj-timeline__description">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
