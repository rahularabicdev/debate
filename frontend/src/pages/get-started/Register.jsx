import { FormInput } from "../../components";

const Register = ({ setPage }) => {
  return (
    <div className="p-10 col-span-2">
      <h4 className="mb-2 text-3xl font-bold text-black">Sign Up</h4>
      <p className="mb-10 text-sm text-gray-600">
        Hey, Enter your details to create your account
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 w-full">
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <FormInput
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
        />
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          placeholder="Date Of Birth"
        />
        <div></div>
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="password2"
          placeholder="Confirm Password"
        />
        <div className="col-span-2">
          <button type="submit" className="button">
            Register
          </button>
          <p className="mt-10 text-sm">
            Already a member?{" "}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setPage("login")}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
