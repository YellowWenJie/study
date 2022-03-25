import { FormEvent, memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'govuk-react-jsx';
import { login } from '../../services/API';

interface Credentials {
  email: string;
  password: string;
}

async function loginUser(credentials: Credentials) {
  return await login(credentials);
}

export default memo(function Login(props: {
  setToken: (userToken: any) => void;
}) {
  let history = useHistory();

  const { setToken } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await loginUser({
      email,
      password,
    });
    setToken(result);
    history.push('/');
    window.location.reload();
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <Input
          className="govuk-input--width-20"
          hint={{
            children: 'Your email address',
          }}
          id="input-width-20"
          label={{
            children: 'Username',
          }}
          name="email"
          type="text"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <div className="govuk-form-group">
          <Input
            label={{
              children: 'Password',
            }}
            className="govuk-input--width-20"
            id="password"
            name="password"
            type="password"
            value={password}
            data-module="moj-password-reveal"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
});
