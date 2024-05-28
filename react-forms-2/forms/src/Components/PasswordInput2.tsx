type Props = {
  password: string;
  setPassword: (arg1: string) => void;
};

export function PasswordInput2({ password, setPassword }: Props) {
  return (
    <label className="font-semibold">
      <div>Password</div>
      <input
        type="password"
        name="password"
        className="ring-2 ring-slate-300 rounded-md px-2"
        onChange={(e) => setPassword(e.target.value)}
        value={password}></input>
    </label>
  );
}
