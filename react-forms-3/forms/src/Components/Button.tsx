import { Link } from 'react-router-dom';

type Props = {
  formType: string;
};

export function Button({ formType }: Props) {
  return (
    <Link
      className="px-8 py-4 text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-xl hover:ring-2 ring-slate-900 hover:bg-gradient-to-l"
      to={formType.toLowerCase()}>
      {formType} Form
    </Link>
  );
}
