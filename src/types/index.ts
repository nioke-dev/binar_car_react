export type EventTargetForm = {
  elements: Record<string, { value: string | number }>;
};

export type Car = {
  model: string;
};

export type GoogleOAuthToken = {
  access_token: string;
  request_token: string;
  scope: string;
  token_type: string;
  id_token: string;
};
