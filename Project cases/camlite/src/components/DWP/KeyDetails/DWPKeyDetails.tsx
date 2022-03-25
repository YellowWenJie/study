import React from 'react';

export interface IProps {
  top: Array<any>;
  bottom: Array<any>;
}

export const DWPKeyDetails = (props: IProps) => {
  const { top, bottom } = props;
  return (
    <section className="dwp-key-details-bar" aria-label="Key details">
      <dl className="dwp-key-details-bar__key-details">
        <div className="dwp-key-details-bar__top-block">
          {top.map((item: any, index) => (
            <span key={index}>
              <dt className="govuk-visually-hidden">{item.name}</dt>
              <dd className={`dwp-key-details-bar__${item.type ?? 'name'}`}>
                {item.value}
              </dd>
            </span>
          ))}
        </div>
        <div className="dwp-key-details-bar__bottom-block">
          {bottom.map((item: any, index) => (
            <span key={index}>
              <dt>{item.name}</dt>
              <dd>{item.value}</dd>
            </span>
          ))}
        </div>
      </dl>
    </section>
  );
};
