import { CaseState } from './Case';
import { Tag } from 'govuk-react-jsx';

export function CaseTag(state: CaseState) {
  switch (state) {
    case CaseState.open:
      return <Tag className="govuk-tag--yellow">Open </Tag>;
    case CaseState.unassigned:
      return <Tag className="govuk-tag--blue">Unassigned</Tag>;
    case CaseState.awaitDecision:
      return <Tag className="govuk-tag--blue">Awaiting Decision</Tag>;
    case CaseState.awaitEvidence:
      return <Tag className="govuk-tag--red">Awaiting Evidence</Tag>;
    default:
      return <Tag className="govuk-tag--grey">{state} </Tag>;
  }
}
