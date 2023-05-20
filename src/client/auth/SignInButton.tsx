export const SignInButton = () => {
  const handleClick = () => {
    console.log('Sign In With Google');
  };

  return (
    <button onClick={handleClick} type="button" className="normal-case btn btn-primary min-w-60">
      Sign In With Google
    </button>
  );
};
