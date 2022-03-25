import axios from 'axios';
import { getToken } from './token';

const apiRoot = process.env.REACT_APP_CAMLITE_API;

/**
 * Get Queries - get list of queries matching params
 * @param type
 * @param params
 */
export async function getQuery(type: string, params: any) {
  try {
    const url = `${apiRoot}/query${type}`;
    const { data } = await axios.get(url, { ...params });
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * Post Query
 * @param type
 * @param params
 */
export async function postQuery(type: string, params: any) {
  try {
    const url = `${apiRoot}/query${type}`;
    console.log(`Post ${url}...`);
    const { data } = await axios.post(url, { ...params });
    return {
      message: 'Success',
      data,
    };
  } catch (error) {
    return {
      message: 'Error',
    };
  }
}

/**
 * Delete Case Query
 * @param type
 * @param params
 */
export async function deleteQuery(type: string, params: any) {
  try {
    const url = `${apiRoot}/query${type}/${params}`;
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * Get Case Queries - get list of queries matching params
 * @param params
 */
export async function getCaseQuery(params: any) {
  return getQuery('Case', params);
}

/**
 * Post Case Query
 * @param params
 */
export async function postCaseQuery(params: any) {
  return postQuery('Case', params);
}

/**
 * Delete Case Query
 * @param params
 */
export async function deleteCaseQuery(params: any) {
  return deleteQuery('Case', params);
}

/**
 * Get Task Queries - get list of queries matching params
 * @param params
 */
export async function getTaskQuery(params: any) {
  return getQuery('Task', params);
}

/**
 * Post Task Query
 * @param params
 */
export async function postTaskQuery(params: any) {
  return postQuery('Task', params);
}

/**
 * Delete Task Query
 * @param params
 */
export async function deleteTaskQuery(params: any) {
  return deleteQuery('Task', params);
}

/**
 * Get Employee Queries - get list of queries matching params
 * @param params
 */
export async function getEmployeeQuery(params: any) {
  return getQuery('User', params);
}

/**
 * Post Employee Query
 * @param params
 */
export async function postEmployeeQuery(params: any) {
  return postQuery('User', params);
}

/**
 * Delete Employee Query
 * @param params
 */
export async function deleteEmployeeQuery(params: any) {
  return deleteQuery('User', params);
}

/**
 * Get Customer Queries - get list of queries matching params
 * @param params
 */
export async function getCustomerQuery(params: any) {
  return getQuery('Customer', params);
}

/**
 * Post Customer Query
 * @param params
 */
export async function postCustomerQuery(params: any) {
  return postQuery('Customer', params);
}

/**
 * Delete Customer Query
 * @param params
 */
export async function deleteCustomerQuery(params: any) {
  return deleteQuery('Customer', params);
}

async function apiAuth(url: string, method: any, params: any = null) {
  try {
    const token = getToken() ?? '';
    return await axios({
      url,
      params,
      method,
      baseURL: apiRoot,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return {
      data: {},
    };
  }
}

async function apiAuthData(url: string, method: any, data: any = null) {
  try {
    const token = getToken() ?? '';
    return await axios({
      url,
      data,
      method,
      baseURL: apiRoot,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return {
      data: {},
    };
  }
}

/**
 * getUsers - get list of users matching params
 * @param params
 */
export async function getUsers(params: any) {
  try {
    const { data } = await apiAuth('/users', 'get', params);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getUser - get single user
 * @param id
 */
export async function getUser(id: number) {
  try {
    const { data } = await apiAuth(`/users/${id}`, 'get');
    return data;
  } catch (error) {
    return {};
  }
}

/**
 * patchUser - update user matching id
 * @id id
 * @body user fields
 */
export async function patchUser(id: string, body: any) {
  try {
    const { data } = await apiAuthData(
      `${apiRoot}/users/${id})`,
      'patch',
      body
    );
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getCustomers - get list of customers matching
 * @param params
 */

export async function getCustomers(params: any) {
  try {
    const { data } = await apiAuth('/customers', 'get', params);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getCustomer - Get matched with a customer
 * @params id
 */
export async function getCustomer(id: string) {
  try {
    const { data } = await apiAuth(`/customers/${id}`, 'get');
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * patchCustomer - update customer matching id
 * @id id
 * @body customer fields
 */
export async function patchCustomer(id: string, body: any) {
  try {
    const { data } = await apiAuthData(`/customers/${id}`, 'patch', body);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getCases - get list of cases matching
 * @param params
 */

export async function getCases(params: any) {
  try {
    params = { ...params, _expand: ['users', 'customers'] };
    const { data } = await apiAuth(`/cases`, 'get', params);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * postCase - Post a new case (Create)
 * @param params
 */
export async function postCase(params: any) {
  try {
    const { data } = await apiAuthData(`/cases`, 'post', { ...params });
    return {
      message: 'Success',
      data: data,
    };
  } catch (error) {
    return {
      message: 'Error',
    };
  }
}

/**
 * updateCases - update case matching id (Update in full)
 * @id id
 * @body case
 */
export async function updateCases(id: string, body: any) {
  try {
    const { data } = await apiAuthData(`/cases/${id}`, 'put', body);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * patchCases - update case matching id (Amend)
 * @id id
 * @body case
 */
export async function patchCase(id: string, body: any) {
  try {
    const { data } = await apiAuthData(`/cases/${id}`, 'patch', body);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getTasks - get tasks matching params
 * @param params
 */
export async function getTasks(params: any) {
  try {
    params = { ...params, _expand: ['users', 'customers', 'cases'] };
    const { data } = await apiAuth(`/tasks`, 'get', params);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * postTask - Post a new task
 * @param params
 */
export async function postTask(params: any) {
  try {
    const url = `${apiRoot}/tasks`;
    const { data } = await apiAuthData(url, 'post', { ...params });
    return {
      message: 'Success',
      data: data,
    };
  } catch (error) {
    return {
      message: 'Error',
    };
  }
}

/**
 * updateTasks - update tasks matching id
 * @id id
 * @body task
 */
export async function updateTasks(id: string, body: any) {
  try {
    const { data } = await apiAuthData(`/tasks/${id}`, 'put', body);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * patchTasks - update tasks matching id
 * @id id
 * @body task fields
 */
export async function patchTask(id: string, body: any) {
  try {
    const { data } = await apiAuthData(`/tasks/${id}`, 'patch', body);
    return data;
  } catch (error) {
    return [];
  }
}

/**
 * getEvents - get tasks matching params
 * @param params
 */
export async function getEvents(params: any) {
  try {
    const { data } = await apiAuth(`/events`, 'get', params);
    return data;
  } catch (error) {
    return [];
  }
}

export async function login(body: any) {
  try {
    const url = `${apiRoot}/login`;
    const { data } = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    return '';
  }
}
