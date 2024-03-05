import { CreateUserModel, LoginUserModel } from '../types/types';

const endpointUsers = '/users/'; 
const endpointLogin = '/login';/*
const endpointData = '/data/';
const dataTrue = '?data=true'; */
const localhost = 'http://localhost:3030';

export const creatNewUser = async (user: CreateUserModel) => {
  try {
    const response = await fetch(localhost + endpointUsers, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.ok === false) {
      return response.json();
    }
    if (response.ok) {
      return response;
    } else {
      throw new Error(`Erro ao criar novo usuário: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const loginUser = async (user: LoginUserModel) => {
  try {
    const response = await fetch(localhost + endpointLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.ok === false) {
      return response.json();
    }
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Erro ao fazer login: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}