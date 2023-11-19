import { LoginParams, LoginResponse } from '@movie/types/authTypes';

export const login = async (params: LoginParams) => {
  const body = JSON.stringify({ ...params, returnSecureToken: true });
  const res = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
  return res.json();
};

export const register = async (params: LoginParams) => {
  const body = JSON.stringify({ ...params, returnSecureToken: true });
  const res = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
  return res.json();
};
