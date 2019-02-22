import jwtDecode from 'jwt-decode';

export const decodeJwtToken = token => jwtDecode(token);
