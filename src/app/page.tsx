import { AddForm } from '../components/AddForm';
import { onHandleSubmit } from '../actions/sendForm';

export default function IndexPage() {
  return (
    <div>
      <AddForm sendForm={onHandleSubmit} />
    </div>
  );
}
