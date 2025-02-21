import { FormInput } from "../../components";
import { AuthImage } from "../../static/images";

const Login = ({ setPage }) => {
  return (
    <>
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={AuthImage}
          alt="Auth Image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative p-10">
        <h4 className="mb-2 text-3xl font-bold text-black">Sign In</h4>
        <p className="mb-10 text-sm text-gray-600">
          Hey, Enter your details to sign in to your account
        </p>

        <form>
          <FormInput
            label="Email / Username"
            type="email"
            name="identifier"
            placeholder="Email / Username"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="button">
            Login
          </button>
          <p className="mt-10 text-sm">
            Not a member?{" "}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setPage("register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
