type Props = {
  user: string;
  setUser: (arg1: string) => void;
};

export function UsernameInput2({ user, setUser }: Props) {
  return (
    <label className="font-semibold">
      <div>Username</div>
      <input
        type="text"
        name="username"
        className="ring-2 ring-slate-300 rounded-md px-2"
        onChange={(e) => setUser(e.target.value)}
        value={user}></input>
    </label>
  );
}
