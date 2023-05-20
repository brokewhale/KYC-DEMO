type Props = {};

export const SignOutButton = (props: Props) => {
  const handleClick = () => {
    console.log('Sign Out');
  };

  return (
    <button onClick={handleClick} type="button" className="normal-case btn">
      Sign Out
    </button>
  );
};
