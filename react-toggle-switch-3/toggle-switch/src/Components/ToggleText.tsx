type Props = {
  status: string;
};

export function ToggleText({ status }: Props) {
  return <h1 className="flex items-center text-2xl font-semibold">{status}</h1>;
}
