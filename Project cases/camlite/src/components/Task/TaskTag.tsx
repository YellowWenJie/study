import { TaskState } from './Task';
import { Tag } from 'govuk-react-jsx';

export function TaskTag(state: TaskState) {
  switch (state) {
    case TaskState.open:
      return <Tag className="govuk-tag--yellow">Open</Tag>;
    case TaskState.new:
      return <Tag className="govuk-tag--blue">New</Tag>;
    case TaskState.awaitDecision:
      return <Tag className="govuk-tag--blue">Awaiting Decision</Tag>;
    case TaskState.awaitEvidence:
      return <Tag className="govuk-tag--red">Awaiting Evidence</Tag>;
    default:
      return <Tag className="govuk-tag--grey">{state} </Tag>;
  }
}
