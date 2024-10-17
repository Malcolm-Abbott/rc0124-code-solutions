type Props = {
  clicks: number;
};

export function Counter({ clicks }: Props) {
  return (
    <>
      <div className="text-center border-2 border-slate-950 rounded-full py-4 bg-sticky-note">
        {clicks}
      </div>
    </>
  );
}
