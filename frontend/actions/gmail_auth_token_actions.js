import configureStore from '../store/store';

export const REGISTER_CREDENTIAL_TOKEN = 'REGISTER_CREDENTIAL_TOKEN';
export const DESTROY_CREDENTIAL_TOKEN = 'DESTROY_CREDENTIAL_TOKEN';

export const registerCredentialToken = token => {
    configureStore.set('credentialToken', token);
    return {
      type: REGISTER_CREDENTIAL_TOKEN,
      token,
    };
  };
  
export const destroyCredentialToken = () => {
    store.remove('credentialToken');
    return {
      type: DESTROY_CREDENTIAL_TOKEN,
    };
};