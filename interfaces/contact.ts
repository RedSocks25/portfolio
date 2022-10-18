import { HTTP_CODES } from '../utils/contants';


export interface Message {
  username: string;
  email: string;
  text: string;
}

export interface EmailResponse {
  message: string,
  code: HTTP_CODES,
}
